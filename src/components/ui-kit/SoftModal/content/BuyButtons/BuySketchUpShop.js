import React, { useEffect, useState } from 'react'
import Radio from '@material-ui/core/Radio'
import { Checkbox, Box } from '@material-ui/core'
import { ModalConsumer } from '../../../../layouts/Layout'
import { currencies } from './currencies'
import UserDataForm from './UserDataForm'
import { initializeApp } from 'firebase/app'
import { useLiqPay } from './effects/useLiqPay'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

import './BuySketchUpShop.module.less'
import dayjs from 'dayjs'

function UserAgreementLink() {
    return (
        <ModalConsumer>
            {({ handleOpenSoftModal }) => (
                <span>
                    Нажимая купить Вы принимаете условия{' '}
                    <span
                        onClick={handleOpenSoftModal('UserAgreement')}
                        className='policy_link'
                    >
                        пользовательского соглашения
                    </span>
                </span>
            )}
        </ModalConsumer>
    )
}

const initialUserData = {
    name: '',
    company: '',
    website: '',
    email: '',
    phone: '',
}

export default function BuySketchUpShop({
    priceUSD = 119,
    product = 'SketchUpShop',
}) {
    const [selectedValue, setSelectedValue] = useState('USD')
    const [currentAmount, setCurrentAmount] = useState(priceUSD)
    const [userAgreementCheckbox, setUserAgreementCheckbox] = useState(false)
    const [userData, setUserData] = useState(
        localStorage.getItem('USER_DATA_DATABASE') || initialUserData
    )
    const [db, setDB] = useState(null)

    const currencyConvertKey = process.env.CURCONV_API_KEY

    const [hashedValue] = useLiqPay(currentAmount, product, selectedValue)

    useEffect(() => {
        ;(async () => {
            try {
                const firebaseConfig = {
                    databaseURL:
                        'https://barkat.europe-west3.firebasedatabase.app',
                    projectId: 'barkat-dbb65',
                }

                const app = await initializeApp(firebaseConfig)
                const newDB = await getFirestore(app)
                setDB(newDB)
            } catch (err) {
                console.error('error: ', err)
            }
        })()
    }, [])

    useEffect(() => {
        const UAH_CURENCY = `https://free.currconv.com/api/v7/convert?q=USD_${selectedValue}&compact=ultra&apiKey=${currencyConvertKey}`
        fetch(UAH_CURENCY)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error('Currency conversion error')
            })
            .then(data => {
                setCurrentAmount(data[`USD_${selectedValue}`] * priceUSD)
            })
            .catch(err => {
                console.log(err)
                setCurrentAmount(priceUSD)
                setSelectedValue('USD')
            })
        const savedData = localStorage.getItem('USER_DATA_DATABASE')
        if (savedData) setUserData(JSON.parse(savedData))
    }, [])

    async function handleChooseCurrency(currency) {
        const CONVERT_URL = `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=${currencyConvertKey}`
        try {
            const data = await fetch(CONVERT_URL).then(response =>
                response.json()
            )
            console.log(data, currency)
            // Promise.reject()
            setCurrentAmount(data[`USD_${currency}`] * priceUSD)
            setSelectedValue(currency)
        } catch (err) {
            setCurrentAmount(priceUSD)
            setSelectedValue('USD')
            console.error(err)
        }
    }

    function handleChangeCheckbox(e) {
        setUserAgreementCheckbox(e.target.checked)
    }

    function handleChangeUserData(event) {
        console.log(event.target.value)
        const value = event.target.value
        localStorage.setItem(
            'USER_DATA_DATABASE',
            JSON.stringify({ ...userData, [event.target.name]: value })
        )

        setUserData({ ...userData, [event.target.name]: value })
    }

    const handleSubmit = async e => {
        // e.preventDefault()
        try {
            const formatToday = dayjs().format('MM.DD.YYYY')
            await setDoc(doc(db, formatToday, userData.email), {
                username: userData.name,
                email: userData.email,
                phone: userData.phone,
                timestamp: dayjs().format('MMMM D, YYYY h:mm A'),
            })
            console.log('success')
        } catch (err) {
            console.error('error: ', err)
        }

        // try {
        //     const formData = new FormData()
        //     formData.append('data', hashedValue[0])
        //     formData.append('signature', hashedValue[1])
        //     // formData.append('currency', hashedValue[1])
        //
        //     const response = await fetch(
        //         'https://www.liqpay.ua/api/3/checkout',
        //         {
        //             method: 'POST',
        //             body: formData,
        //             headers: {
        //                 'accept-charset': 'utf-8',
        //             },
        //         }
        //     ).then(response => response.json())
        //     console.log(response)
        // } catch (err) {
        //     console.error('liqpay error', err)
        //
        // }
    }

    return (
        <Box>
            <form
                method='POST'
                acceptCharset='utf-8'
                action='https://www.liqpay.ua/api/3/checkout'
                onSubmit={handleSubmit}
            >
                <UserDataForm
                    handleChangeUserData={handleChangeUserData}
                    userData={userData}
                />
                <Box className='checkbox_container'>
                    {currencies.map((item, index) => (
                        <Box
                            value={item.currency}
                            onClick={() => handleChooseCurrency(item.currency)}
                            key={index}
                            className='checkbox_wrapper'
                        >
                            <Radio
                                checked={selectedValue === item.currency}
                                name={item.currency}
                            />
                            <Box
                                style={{ backgroundImage: `url(${item.img})` }}
                                className='flag_image'
                            ></Box>
                            <span className='currency_name'>
                                {item.currency}
                            </span>
                        </Box>
                    ))}
                </Box>
                <Box className='text_container'>
                    <Box className='text_field_container'>
                        <Box>
                            <Checkbox
                                color='primary'
                                checked={userAgreementCheckbox}
                                onChange={handleChangeCheckbox}
                                required
                            />
                            <UserAgreementLink />
                        </Box>
                    </Box>
                    <input type='hidden' name='data' value={hashedValue[0]} />
                    <input
                        type='hidden'
                        name='signature'
                        value={hashedValue[1]}
                    />
                    <input
                        className='footer send_payment'
                        type='submit'
                        value={`Купить за ${
                            Math.floor(currentAmount * 100) / 100
                        } ${selectedValue}`}
                    />
                </Box>
            </form>
        </Box>
    )
}
