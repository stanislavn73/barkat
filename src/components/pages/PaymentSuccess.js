import React, { useEffect } from 'react'
import FullPage from '../ui-kit/FullPage'
import styles from './SoftPage/SoftPage.module.scss'

const PaymentSuccess = () => {
    useEffect(() => {
        const { name, company, email, phone, website, orderId, product } =
            JSON.parse(localStorage.getItem('USER_DATA_DATABASE')) || {}

        const state = {
            subject: 'Заказ оплачен',
            html: `
            <div>
            <div>имя: <strong>${name}</strong>
            <div>компания: <strong>${company}</strong></div>
            <div>профессия: <strong>Покупатель</strong></div>
            <div>имейл: <strong>${email}</strong></div>
            <div>телефон: <strong>${phone}</strong></div>
            <div>вебсайт: <strong>${website}</strong></div>
            <div>orderId: <strong>${orderId}</strong></div>
            <div>продукт: <strong>${product}</strong></div>
             </div>`,
        }
        ;(async () => {
            try {
                const sendGridHost = process.env.SENDGRID_URL
                const url = `${sendGridHost}/api/send`
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(state),
                })
                if (response.status !== 200) {
                    throw new Error(response)
                }
                console.log(response)
            } catch (error) {
                console.error('ERROR', error)
            }
        })()
    }, [])

    return (
        <FullPage>
            <div className={styles['soft-block-title']}>
                Оплата прошла успешно.
                <br /> С Вами свяжутся в ближайшее время
            </div>
        </FullPage>
    )
}
export default PaymentSuccess
