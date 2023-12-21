import { ModalConsumer } from '../../layouts/Layout'
import cx from 'classnames'
import styles from './PrivacyPolicy.module.scss'

export default function UserAgreement() {
    return (
        <div className={styles['label-wrapper']}>
            <ModalConsumer>
                {({ handleOpenSoftModal }) => (
                    <div
                        className={styles['label-container']}
                        onClick={handleOpenSoftModal('UserAgreement')}
                    >
                        <p className={styles['label-title']}></p>
                        <p
                            className={cx(
                                styles['label-title'],
                                styles.underlined
                            )}
                        >
                            Публічний договір
                        </p>
                    </div>
                )}
            </ModalConsumer>
        </div>
    )
}
