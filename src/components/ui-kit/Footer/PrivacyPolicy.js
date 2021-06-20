import React from 'react';
import { ModalConsumer } from '../../layouts/Layout';
import './PrivacyPolicy.module.less';
import visa from 'payment-icons/min/flat/visa.svg';
import masterCard from 'payment-icons/min/flat/mastercard.svg';

export default function PrivacyPolicy() {
    return (
        <div className='label-wrapper'>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <div
                        className='label-container'
                        onClick={handleOpenSoftModal('PrivacyPolicy')}
                    >
                        {/* <p className='label-title'>Положение о </p> */}
                        <p className='label-title underlined'>
                            Политика конфиденциальности
                        </p>
                        <div>
                            <img alt='' src={visa} className='cards_logo' />
                            <img
                                alt=''
                                src={masterCard}
                                className='cards_logo'
                            />
                        </div>
                    </div>
                )}
            </ModalConsumer>
        </div>
    );
}
