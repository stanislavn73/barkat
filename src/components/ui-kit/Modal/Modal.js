import React from 'react';
import cx from 'classnames';
import Input from '../Input';
import Img from '../Img';
import { init, send } from 'emailjs-com';

import * as closeIcon from '../../../assets/images/icons/close.png';
import './Modal.less';

class Modal extends React.PureComponent {
    state = {
        name: '',
        surname: '',
        companyName: '',
        profession: '',
        email: '',
        phoneNumber: '',
        target: '',
    };
    myRef = React.createRef();
    componentDidMount() {
        init('user_8J36WovfcyvCTVUlGVgez');
    }
    handleTextChange = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    sendData = () => {
        this.myRef.current.innerText = 'Отправка...';
        const serviceId = 'service_2gxgl7t';
        const templateId = 'template_9dlnssp';
        this.sendFeedback(serviceId, templateId, this.state);
    };

    sendFeedback(serviceId, templateId, data) {
        send(serviceId, templateId, {
            ...data,
            to_email: 'Julia@barkat-3d-ville.com',
            to_email1: 'Sergii@barkat-3d-ville.com',
        })
            .then((response) => {
                if (response.status === 200) {
                    this.myRef.current.innerText = 'Отправлено!';
                    this.setState({
                        name: '',
                        surname: '',
                        companyName: '',
                        profession: '',
                        email: '',
                        phoneNumber: '',
                        target: '',
                    });
                    setTimeout(() => {
                        this.props.onClose();
                        this.myRef.current.innerText = 'Отправить';
                    }, 1500);
                }
            })
            .catch(() => {
                this.myRef.current.innerText = 'Ошибка! Плохое соединение';
                setTimeout(() => {
                    this.props.onClose();
                    this.myRef.current.innerText = 'Отправить';
                }, 1500);
            });
    }

    render() {
        const {
            name,
            surname,
            companyName,
            profession,
            email,
            phoneNumber,
            target,
        } = this.state;
        const { onClose, isOpened } = this.props;

        const modalCX = cx({
            'modal-wrapper': true,
            'modal-wrapper_opened': isOpened,
        });

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
                                onChange={this.handleTextChange('name')}
                            />
                            <Input
                                className='modal-input'
                                title='Фамилия'
                                value={surname}
                                onChange={this.handleTextChange('surname')}
                            />
                        </div>
                        <div className='inputs-wrapper'>
                            <Input
                                className='modal-input'
                                title='Компания'
                                value={companyName}
                                onChange={this.handleTextChange('companyName')}
                            />
                            <Input
                                className='modal-input'
                                title='Должность'
                                value={profession}
                                onChange={this.handleTextChange('profession')}
                            />
                        </div>
                        <div className='inputs-wrapper'>
                            <Input
                                className='modal-input'
                                title='Email'
                                value={email}
                                onChange={this.handleTextChange('email')}
                            />
                            <Input
                                className='modal-input'
                                title='Телефон'
                                value={phoneNumber}
                                onChange={this.handleTextChange('phoneNumber')}
                            />
                        </div>
                        <div className='textarea-wrapper'>
                            <Input
                                className='modal-input'
                                title='Интересующий вопрос'
                                value={target}
                                onChange={this.handleTextChange('target')}
                                multiline
                            />
                        </div>
                    </div>
                    <div className='bottom-submit-wrapper'>
                        <div className='submit-wrapper'>
                            <div
                                className='submit-button'
                                onClick={this.sendData}
                                ref={this.myRef}
                            >
                                Отправить
                            </div>
                        </div>
                        <div className='bottom-black-line' />
                    </div>
                </div>
                <div className='modal-background' onClick={onClose}></div>
            </div>
        );
    }
}

export default Modal;
