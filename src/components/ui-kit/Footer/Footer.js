import { PureComponent } from 'react'

import { ModalConsumer } from '../../layouts/Layout'

import SocialMediaFooter from './SocialMediaFooter'

import styles from './Footer.module.scss'
import PrivacyPolicy from './PrivacyPolicy'
import Agreement from './Agreement'

class Footer extends PureComponent {
    render() {
        return (
            <>
                <div className={styles['footer-wrapper']}>
                    <div className={styles['footer-content']}>
                        <div className={styles['links_container']}>
                            <Agreement />
                            <PrivacyPolicy />
                        </div>
                        {this.props.page !== 'events' &&
                            this.props.page !== 'soft' && (
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
                                    href={'http://www.barkat-3D-ville.com'}
                                >
                                    www.barkat-3D-ville.com
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
                                        Написать нам
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
}

export default Footer
