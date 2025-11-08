import React from 'react';
import cx from 'classnames';
import Input from '../Input';
import Img from '../Img';
import useTranslation from 'next-translate/useTranslation';

import * as closeIcon from '../../../assets/images/icons/close.png';
import './Modal.module.less';

// Functional wrapper to use hooks
function ModalWithTranslation(props) {
    const { t } = useTranslation('common');
    return <Modal {...props} t={t} />;
}

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
        const { onClose, isOpened, t } = this.props;

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
                        <div className='modal-title'>{t('consultation.formName')}</div>
                        <div className='inputs-wrapper'>
                            <Input
                                className='modal-input'
                                title={t('consultation.name')}
                                value={companyName}
                                onChange={this.handleTextChange('name')}
                            />
                            <Input
                                className='modal-input'
                                title={t('consultation.surName')}
                                value={name}
                                onChange={this.handleTextChange('surname')}
                            />
                        </div>
                        <div className='inputs-wrapper'>
                            <Input
                                className='modal-input'
                                title={t('consultation.company')}
                                value={companyName}
                                onChange={this.handleTextChange('companyName')}
                            />
                            <Input
                                className='modal-input'
                                title={t('consultation.title')}
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
                                title={t('consultation.phone')}
                                value={phoneNumber}
                                onChange={this.handleTextChange('phoneNumber')}
                            />
                        </div>
                        <div className='textarea-wrapper'>
                            <Input
                                className='modal-input'
                                title={t('consultation.question')}
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
                                {t('consultation.send')}
                            </div>
                        </div>
                        <div className='bottom-black-line' />
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWithTranslation;
