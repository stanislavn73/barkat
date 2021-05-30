import React from 'react';
import { ModalConsumer } from '../../layouts/Layout';

export default function UserAgreement() {
    return (
        <div className='label-wrapper'>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <div
                        className='label-container'
                        onClick={handleOpenSoftModal('UserAgreement')}
                    >
                        <p className='label-title'></p>
                        <p className='label-title underlined'>
                            Пользовательское соглашение
                        </p>
                    </div>
                )}
            </ModalConsumer>
        </div>
    );
}
