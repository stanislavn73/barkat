import React, { useRef, useState } from 'react'
import cx from 'classnames'
import Input from '../Input'
import Img from '../Img'

import * as closeIcon from '../../../assets/images/icons/close.png'
import './Modal.module.less'

const Modal = props => {
    const [state, setState] = useState({
        name: '',
        surname: '',
        companyName: '',
        profession: '',
        email: '',
        phoneNumber: '',
        target: '',
    })

    const [errors, setErrors] = useState({ email: false, phoneNumber: false })

    const {
        name,
        surname,
        companyName,
        profession,
        email,
        phoneNumber,
        target,
    } = state

    const { onClose, isOpened } = props
    const buttonRef = useRef()

    const modalCX = cx({
        'modal-wrapper': true,
        'modal-wrapper_opened': isOpened,
    })

    const handleTextChange = key => e => {
        if (key === 'email') {
            const emailRegExp =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!e.target.value.match(emailRegExp)) {
                setErrors(prev => ({ ...prev, email: true }))
            } else {
                setErrors(prev => ({ ...prev, email: false }))
            }
        }
        if (key === 'phoneNumber') {
            const phoneRegExp =
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            if (!e.target.value.match(phoneRegExp)) {
                setErrors(prev => ({ ...prev, phoneNumber: true }))
            } else {
                setErrors(prev => ({ ...prev, phoneNumber: false }))
            }
        }
        setState(prev => ({ ...prev, [key]: e.target.value }))
    }
    const sendData = async () => {
        if (!phoneNumber) {
            return setErrors(prev => ({ ...prev, phoneNumber: true }))
        }
        if (!email) {
            return setErrors(prev => ({ ...prev, email: true }))
        }

        buttonRef.current.innerText = 'Отправка...'
        const msg = {
            subject: 'Новый заказ',
            html: `
            <div>
            <div>имя: <strong>${name}</strong>
            <div>фамилия: <strong>${surname}</div>
            <div>компания: <strong>${companyName}</strong></div>

            <div>профессия: <strong>${profession}</strong></div>

            <div>имейл: <strong>${email}</strong></div>

            <div>телефон: <strong>${phoneNumber}</strong></div>
 
            <div>вопрос: <strong>${target}</strong></div>
            </div>`,
        }

        try {
            const url = `${process.env.SENDGRID_URL}/api/send`
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(msg),
            })
            if (response.status !== 200) {
                throw new Error(response)
            }

            buttonRef.current.innerText = 'Отправлено!'
        } catch (error) {
            buttonRef.current.innerText = 'Ошибка! Плохое соединение'
            console.error('ERROR', error)
        } finally {
            setTimeout(() => {
                buttonRef.current.innerText = 'Отправить'
            }, 1500)
        }
    }

    return (
        <div className={modalCX}>
            <div className='modal'>
                <Img
                    className='modal-close-icon'
                    src={closeIcon}
                    onClick={onClose}
                />
                <div className='top-black-line' />
                <div className='modal-content-wrapper'>
                    <div className='modal-title'>Заказать консультацию</div>
                    <div className='inputs-wrapper'>
                        <Input
                            className='modal-input'
                            title='Имя'
                            value={name}
                            onChange={handleTextChange('name')}
                        />
                        <Input
                            className='modal-input'
                            title='Фамилия'
                            value={surname}
                            onChange={handleTextChange('surname')}
                        />
                    </div>
                    <div className='inputs-wrapper'>
                        <Input
                            className='modal-input'
                            title='Компания'
                            value={companyName}
                            onChange={handleTextChange('companyName')}
                        />
                        <Input
                            className='modal-input'
                            title='Должность'
                            value={profession}
                            onChange={handleTextChange('profession')}
                        />
                    </div>
                    <div className='inputs-wrapper'>
                        <Input
                            className='modal-input'
                            title='Email'
                            value={email}
                            onChange={handleTextChange('email')}
                            error={!!errors.email}
                            errorMessage={'Введите правильный почтовый ящик'}
                        />

                        <Input
                            className='modal-input'
                            title='Телефон'
                            value={phoneNumber}
                            onChange={handleTextChange('phoneNumber')}
                            error={!!errors.phoneNumber}
                            errorMessage={'Введите правильный телефон'}
                        />
                    </div>
                    <div className='textarea-wrapper'>
                        <Input
                            className='modal-input'
                            title='Интересующий вопрос'
                            value={target}
                            onChange={handleTextChange('target')}
                            multiline
                        />
                    </div>
                </div>
                <div className='bottom-submit-wrapper'>
                    <div
                        className={cx(
                            'submit-wrapper',
                            (errors.email || errors.phoneNumber) && 'disabled'
                        )}
                    >
                        <div
                            className='submit-button'
                            onClick={sendData}
                            ref={buttonRef}
                        >
                            Отправить
                        </div>
                    </div>
                    <div className='bottom-black-line' />
                </div>
            </div>
            <div className='modal-background' onClick={onClose}></div>
        </div>
    )
}

export default Modal
