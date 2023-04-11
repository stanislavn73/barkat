import React, { useEffect } from 'react'
import FullPage from '../ui-kit/FullPage'
import sgMail from '@sendgrid/mail'

const PaymentSuccess = () => {
    const sendGriKey = process.env.SENDGRID_API_KEY
    // server_url

    useEffect(() => {
        const { name, company, email, phone, website } =
            localStorage.getItem('USER_DATA_DATABASE') || []
        sgMail.setApiKey(sendGriKey)
        const state = {
            name,
            company,
            profession: 'покупатель',
            email,
            phone,
            website,
            subject: 'заказ оплачен',
            to: 'stas.at.n.t@gmail.com',
            from: 'stas.at.n.t@gmail.com',
        }
        sgMail
            .send(state)
            .catch(err => console.error('Email notification not sent', err))
    }, [])

    return (
        <FullPage>
            <div className='soft-block-title'>
                Оплата прошла успешно.
                <br /> С Вами свяжутся в ближайшее время
            </div>
        </FullPage>
    )
}
export default PaymentSuccess
