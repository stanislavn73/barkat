import React, { useEffect } from 'react'
import FullPage from '../ui-kit/FullPage'

const PaymentSuccess = () => {
    useEffect(() => {
        const { name, company, email, phone, website } =
            localStorage.getItem('USER_DATA_DATABASE') || []
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
        }(async () => {
            try {
                const sendGridHost = process.env.SENDGRID_URL
                const url = `https://${sendGridHost}/api/send`
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(state),
                })
                if (response.status !== 200) {
                    throw new Error(response)
                }
                console.log(response)
                buttonRef.current.innerText = 'Отправлено!'
            } catch (error) {
                buttonRef.current.innerText = 'Ошибка! Плохое соединение'
                console.error('ERROR', error)
            } finally {
                setTimeout(() => {
                    buttonRef.current.innerText = 'Отправить'
                }, 1500)
            }
        })()
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
