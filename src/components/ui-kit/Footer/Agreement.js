import { useTranslation } from 'next-i18next'
import { ModalConsumer } from '../../layouts/Layout'
import cx from 'classnames'
import styles from './PrivacyPolicy.module.scss'

export default function UserAgreement() {
    const { t } = useTranslation('common')

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
                            {t('footer.publicContract')}
                        </p>
                    </div>
                )}
            </ModalConsumer>
        </div>
    )
}
