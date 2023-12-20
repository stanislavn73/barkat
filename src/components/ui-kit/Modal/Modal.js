import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import Input from '../Input'
import Img from '../Img'

import * as closeIcon from '../../../../public/images/icons/close.png'
import styles from './Modal.module.scss'
import { useTranslation } from '../../layouts/Layout'

const Modal = props => {
    console.log('modal')
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

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        if (isOpened) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    }, [isOpened])

    const buttonRef = useRef()

    const modalCX = cx(
        styles['modal-wrapper'],
        isOpened && styles['modal-wrapper_opened']
    )

    const {
        t: { consultation },
    } = useTranslation('common')
    // "consultation": {
    //     "name": "Ім‘я",
    //       "surName":"Прізвище",
    //       "company": "Компанія",
    //       "title": "Посада",
    //       "phone": "Телефон",
    //       "question": "Опишіть питання",
    //       "send": "Відправити"
    // }
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

        buttonRef.current.innerText = consultation.sending
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

            buttonRef.current.innerText = consultation.sent
        } catch (error) {
            buttonRef.current.innerText = consultation.error
            console.error('ERROR', error)
        } finally {
            setTimeout(() => {
                buttonRef.current.innerText = consultation.send
            }, 1500)
        }
    }

    return (
        <div className={modalCX}>
            <div className={styles.modal}>
                <Img
                    className={styles['modal-close-icon']}
                    src={closeIcon}
                    onClick={onClose}
                />
                <div className={styles['top-black-line']} />
                <div className={styles['modal-content-wrapper']}>
                    <div className={styles['modal-title']}>
                        {consultation.formName}
                    </div>
                    <div className={styles['inputs-wrapper']}>
                        <Input
                            className={styles['modal-input']}
                            title={consultation.name}
                            value={name}
                            onChange={handleTextChange('name')}
                        />
                        <Input
                            className={styles['modal-input']}
                            title={consultation.surName}
                            value={surname}
                            onChange={handleTextChange('surname')}
                        />
                    </div>
                    <div className={styles['inputs-wrapper']}>
                        <Input
                            className={styles['modal-input']}
                            title={consultation.company}
                            value={companyName}
                            onChange={handleTextChange('companyName')}
                        />
                        <Input
                            className={styles['modal-input']}
                            title={consultation.title}
                            value={profession}
                            onChange={handleTextChange('profession')}
                        />
                    </div>
                    <div className={styles['inputs-wrapper']}>
                        <Input
                            className={styles['modal-input']}
                            title='Email'
                            value={email}
                            onChange={handleTextChange('email')}
                            error={!!errors.email}
                            errorMessage={consultation.emailError}
                        />

                        <Input
                            className={styles['modal-input']}
                            title={consultation.phone}
                            value={phoneNumber}
                            onChange={handleTextChange('phoneNumber')}
                            error={!!errors.phoneNumber}
                            errorMessage={consultation.phoneError}
                        />
                    </div>
                    <div className={styles['textarea-wrapper']}>
                        <Input
                            className={styles['modal-input']}
                            title={consultation.question}
                            value={target}
                            onChange={handleTextChange('target')}
                            multiline
                        />
                    </div>
                </div>
                <div className={styles['bottom-submit-wrapper']}>
                    <div
                        className={cx(
                            styles['submit-wrapper'],
                            (errors.email || errors.phoneNumber) &&
                                styles['disabled']
                        )}
                    >
                        <div
                            className={styles['submit-button']}
                            onClick={sendData}
                            ref={buttonRef}
                        >
                            {consultation.send}
                        </div>
                    </div>
                    <div className={styles['bottom-black-line']} />
                </div>
            </div>
            <div className={styles['modal-background']} onClick={onClose}></div>
        </div>
    )
}

export default Modal
