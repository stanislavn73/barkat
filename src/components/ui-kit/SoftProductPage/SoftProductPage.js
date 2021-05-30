import React from 'react';
import cx from 'classnames';
import Input from '../Input';
import Img from '../Img';

import * as closeIcon from '../../../assets/images/icons/close.png';
import './Modal.less';

class Modal extends React.PureComponent {
    state = {
        companyName: '',
        name: '',
        email: '',
        phoneNumber: '',
        target: '',
        surname: '',
        profession: '',
    };

    handleTextChange = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    sendData = () => {
        const { onClose, isOpened } = this.props;

        fetch('/call.php', {
            // eslint-disable-line
            method: 'POST', // или 'PUT'
            body: JSON.stringify(this.state), // данные могут быть 'строкой' или {объектом}!
        }).then(() => setTimeout(onClose, 1000));
    };

    render() {
        const { companyName, name, email, phoneNumber, target } = this.state;
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
                                value={companyName}
                                onChange={this.handleTextChange('name')}
                            />
                            <Input
                                className='modal-input'
                                title='Фамилия'
                                value={name}
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
                                value={name}
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
                            >
                                Отправить
                            </div>
                        </div>
                        <div className='bottom-black-line' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
