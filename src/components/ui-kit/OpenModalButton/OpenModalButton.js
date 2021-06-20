import React from 'react';
import { ModalConsumer } from '../../layouts/Layout';
import './styles.module.less';

export default function OpenModalButton() {
    return (
        <ModalConsumer>
            {({ handleOpenForm }) => {
                return (
                    <div className='modal-open-button' onClick={handleOpenForm}>
                        Написать нам
                    </div>
                );
            }}
        </ModalConsumer>
    );
}
