import { ModalConsumer, useTranslation } from '../../layouts/Layout'

import SocialMediaFooter from './SocialMediaFooter'

import styles from './Footer.module.scss'
import PrivacyPolicy from './PrivacyPolicy'
import Agreement from './Agreement'

function Footer({ page }) {
    const { t } = useTranslation('common')

    return (
        <>
            <div className={styles['footer-wrapper']}>
                <div className={styles['footer-content']}>
                    <div className={styles['links_container']}>
                        <Agreement />
                        <PrivacyPolicy />
                    </div>
                    {page !== 'events' && page !== 'soft' && (
                        <div className={styles['social-container']}>
                            <SocialMediaFooter />
                        </div>
                    )}
                    <div className={styles['footer-content-block']}>
                        <div className={styles['content-title']}>
                            <a
                                className={styles['footer-link']}
                                href={'mail:info@barkat-3D-ville.com'}
                            >
                                info@barkat-3D-ville.com
                            </a>
                        </div>
                        <div className={styles['content-title']}>
                            <a
                                className={styles['footer-link']}
                                href={'https://barkat-3d-ville.com/'}
                            >
                                barkat-3d-ville.com
                            </a>
                        </div>
                    </div>
                    <div className={styles['footer-content-block']}>
                        <ModalConsumer>
                            {({ handleOpenForm }) => (
                                <div
                                    className={styles['footer-button']}
                                    onClick={handleOpenForm}
                                >
                                    {t.footer.writeToUs}
                                </div>
                            )}
                        </ModalConsumer>
                    </div>
                </div>
                <div className={styles['orange-line']} />
            </div>
        </>
    )
}

export default Footer
