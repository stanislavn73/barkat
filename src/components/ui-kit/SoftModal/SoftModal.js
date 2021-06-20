import React from 'react';
import cx from 'classnames';
import Input from '../Input';
import Img from '../Img';
import types from './types';

import * as closeIcon from '../../../assets/images/icons/close.png';
import './SoftModal.module.less';

class Modal extends React.PureComponent {
    render() {
        const { onClose, isOpened, type } = this.props;

        const modalCX = cx({
            'soft-modal-wrapper': true,
            'soft-modal-wrapper_opened': isOpened,
        });

        const currentType = types[type];

        const title = currentType?.title;
        const Content = currentType?.content;

        return (
            <div className={modalCX}>
                <div className='soft-modal'>
                    <div className='soft-modal-header'>
                        <h2>{title}</h2>
                        <Img
                            className='soft-modal-close-icon'
                            src={closeIcon}
                            onClick={onClose}
                        />
                    </div>
                    <div className='soft-modal-content'>
                        {Content && <Content />}
                    </div>
                </div>
                <div className='soft-modal-background' onClick={onClose}></div>
            </div>
        );
    }
}

export default Modal;
