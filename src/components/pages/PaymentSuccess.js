import React, { useEffect } from 'react'
import FullPage from '../ui-kit/FullPage'
import useTranslation from 'next-translate/useTranslation'
import styles from './SoftPage/SoftPage.module.scss'

const PaymentSuccess = () => {
    const { t: commonT } = useTranslation('common')
    const { t: formsT } = useTranslation('forms')
    useEffect(() => {
        const { name, company, email, phone, website, orderId, product } =
            JSON.parse(localStorage.getItem('USER_DATA_DATABASE')) || {}

        const state = {
            subject: formsT('email.paidOrder'),
            html: `
            <div>
            <div>${commonT('consultation.name')}: <strong>${name}</strong>
            <div>${commonT('consultation.company')}: <strong>${company}</strong></div>
            <div>${commonT('consultation.title')}: <strong>${commonT('paymentSuccess.buyer')}</strong></div>
            <div>${formsT('email.email')}: <strong>${email}</strong></div>
            <div>${formsT('email.phone')}: <strong>${phone}</strong></div>
            <div>${formsT('userDataForm.website')}: <strong>${website}</strong></div>
            <div>orderId: <strong>${orderId}</strong></div>
            <div>${commonT('paymentSuccess.product')}: <strong>${product}</strong></div>
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
                {commonT('paymentSuccess.title')}
                <br /> {commonT('paymentSuccess.subtitle')}
            </div>
        </FullPage>
    )
}
export default PaymentSuccess
