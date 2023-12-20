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
    const [amountEuro, setAmountEur] = useState(1)

    useEffect(() => {
        ;(async () => {
            const response = await fetch('/api/liqpay')
            const responseData = await response.json()
            setHryvnaExchangeRate(responseData.hryvnaExchangeRate)
            setAmountEur(Math.ceil(priceUSD * responseData.euroDollarRatio))
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

    // useEffect(() => {
    //     if (
    //         selectedValue === 'USD' ||
    //         selectedValue === 'UAH' ||
    //         selectedValue === 'EUR'
    //     ) {
    //         return
    //     }
    //
    //     const UAH_CURENCY = `https://free.currconv.com/api/v7/convert?q=USD_${selectedValue}&compact=ultra&apiKey=${currencyConvertKey}`
    //     fetch(UAH_CURENCY)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 const data = response.json()
    //                 return setCurrentAmount(
    //                     data[`USD_${selectedValue}`] * priceUSD
    //                 )
    //             }
    //             return Promise.reject('Currency conversion error')
    //         })
    //         .catch(err => {
    //             console.error(err)
    //             setCurrentAmount(priceUSD)
    //             setSelectedValue('USD')
    //         })
    //     const savedData = localStorage.getItem('USER_DATA_DATABASE')
    //     if (savedData) setUserData(JSON.parse(savedData))
    // }, [])

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
        if (currency === 'USD') {
            setCurrentAmount(priceUSD)
            return setSelectedValue('USD')
        }
        if (currency === 'UAH') {
            setCurrentAmount(amountUAH)
            return setSelectedValue('UAH')
        }
        if (currency === 'EUR') {
            setCurrentAmount(amountEuro)
            return setSelectedValue('EUR')
        }
        setSelectedValue(currency)
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
            const { name, email, phone, company, website } = userData
            const formatToday = dayjs().format('MM.DD.YYYY')
            await setDoc(doc(db, formatToday, userData.email), {
                username: name,
                email: email,
                phone: phone,
                timestamp: dayjs().format('MMMM D, YYYY h:mm A'),
                orderId,
            })

            const url = `${process.env.SENDGRID_URL}/api/send`
            const msg = {
                subject: 'Неоплаченый заказ',
                html: `
            <div>
            <div>ФИО: <strong>${name}</strong>
            <div>Вид деятельности: <strong>${company}</strong></div>
            <div>Сайт: <strong>${website}</strong></div>
            <div>имейл: <strong>${email}</strong></div>
            <div>телефон: <strong>${phoneNumber}</strong></div>
             </div>`,
            }
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(msg),
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
