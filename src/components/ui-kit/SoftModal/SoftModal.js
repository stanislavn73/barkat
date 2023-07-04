import React from 'react'
import cx from 'classnames'
import Img from '../Img'
import types from './types'

import * as closeIcon from '../../../../public/images/icons/close.png'
import { useTranslation } from '../../layouts/Layout'
import styles from './SoftModal.module.scss'

const Modal = ({ onClose, isOpened, type }) => {
    const { t } = useTranslation('soft')

    const modalCX = cx(
        styles['soft-modal-wrapper'],
        isOpened && styles['soft-modal-wrapper_opened']
    )

    const currentType = types(t)[type]

    const title = currentType?.title
    const Content = currentType?.content

    return (
        <div className={modalCX}>
            <div className={styles['soft-modal']}>
                <div className={styles['soft-modal-header']}>
                    <h2>{title}</h2>
                    <Img
                        className={styles['soft-modal-close-icon']}
                        src={closeIcon}
                        onClick={onClose}
                    />
                </div>
                <div className={styles['soft-modal-content']}>
                    {Content && <Content />}
                </div>
            </div>
            <div
                className={styles['soft-modal-background']}
                onClick={onClose}
            ></div>
        </div>
    )
}

export default Modal
