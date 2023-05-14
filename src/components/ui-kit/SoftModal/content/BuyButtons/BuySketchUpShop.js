import React, { useEffect, useState } from 'react'
import { Checkbox, Box, Radio } from '@material-ui/core'
import { ModalConsumer } from '../../../../layouts/Layout'
import { currencies } from './currencies'
import UserDataForm from './UserDataForm'
import { initializeApp } from 'firebase/app'
import { useLiqPay } from './effects/useLiqPay'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

import styles from './BuySketchUpShop.module.scss'
import dayjs from 'dayjs'
import Img from '../../../Img'

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
        JSON.parse(localStorage.getItem('USER_DATA_DATABASE')) ||
            initialUserData
    )
    const [db, setDB] = useState(null)

    const [hryvnaExchangeRate, setHryvnaExchangeRate] = useState(1)

    useEffect(() => {
        ;(async () => {
            const response = await fetch('/api/liqpay')
            const responseData = await response.json()
            setHryvnaExchangeRate(responseData.hryvnaExchangeRate)
        })()
    }, [])

    // const { hryvnaExchangeRate } = useContext(CurrencyContext)
    const amountUAH = hryvnaExchangeRate * priceUSD

    const currencyConvertKey = process.env.CURCONV_API_KEY

    const [hashedValue, orderId] = useLiqPay(
        currentAmount,
        amountUAH,
        priceUSD,
        product,
        selectedValue
    )

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
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error('Currency conversion error')
            })
            .then(data => {
                setCurrentAmount(data[`USD_${selectedValue}`] * priceUSD)
            })
            .catch(err => {
                console.error(err)
                setCurrentAmount(priceUSD)
                setSelectedValue('USD')
            })
        const savedData = localStorage.getItem('USER_DATA_DATABASE')
        if (savedData) setUserData(JSON.parse(savedData))
    }, [])

    useEffect(() => {
        localStorage.setItem(
            'USER_DATA_DATABASE',
            JSON.stringify({
                ...userData,
                orderId,
                product,
            })
        )
    }, [orderId])

    async function handleChooseCurrency(currency) {
        if (currency === 'USD') return setCurrentAmount(priceUSD)
        if (currency === 'UAH') {
            setCurrentAmount(amountUAH)
            return setSelectedValue('UAH')
        }
        const CONVERT_URL = `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=${currencyConvertKey}`
        try {
            const data = await fetch(CONVERT_URL).then(response =>
                response.json()
            )
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
        const value = event.target.value
        localStorage.setItem(
            'USER_DATA_DATABASE',
            JSON.stringify({
                ...userData,
                [event.target.name]: value,
            })
        )

        setUserData({
            ...userData,
            [event.target.name]: value,
            orderId,
        })
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
                orderId,
            })
        } catch (err) {
            console.error('error: ', err)
        }
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
                <Box className={styles.checkbox_container}>
                    {currencies.map((item, index) => (
                        <Box
                            value={item.currency}
                            onClick={() => handleChooseCurrency(item.currency)}
                            key={index}
                            className={styles.checkbox_wrapper}
                        >
                            <Radio
                                checked={selectedValue === item.currency}
                                name={item.currency}
                            />
                            <Img
                                src={item.img}
                                className={styles.flag_image}
                            ></Img>
                            <span className={styles.currency_name}>
                                {item.currency}
                            </span>
                        </Box>
                    ))}
                </Box>
                <Box className={styles.text_container}>
                    <Box className={styles.text_field_container}>
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
                        className={`${styles.footer} ${styles.send_payment}`}
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
