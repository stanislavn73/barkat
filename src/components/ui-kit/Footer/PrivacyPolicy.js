import { ModalConsumer } from '../../layouts/Layout'
import visa from 'payment-icons/min/flat/visa.svg'
import masterCard from 'payment-icons/min/flat/mastercard.svg'
import Img from '../Img'
import cx from 'classnames'

import styles from './PrivacyPolicy.module.scss'

export default function PrivacyPolicy() {
    return (
        <div className={styles['label-wrapper']}>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <div
                        className={styles['label-container']}
                        onClick={handleOpenSoftModal('PrivacyPolicy')}
                    >
                        {/* <p className='label-title'>Положение о </p> */}
                        <p
                            className={cx(
                                styles['label-title'],
                                styles.underlined
                            )}
                        >
                            Политика конфиденциальности
                        </p>
                        <div>
                            <Img
                                alt=''
                                src={visa}
                                className={styles['cards_logo']}
                            />
                            <Img
                                alt=''
                                src={masterCard}
                                className={styles['cards_logo']}
                            />
                        </div>
                    </div>
                )}
            </ModalConsumer>
        </div>
    )
}
