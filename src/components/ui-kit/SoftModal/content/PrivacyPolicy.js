import React from 'react'
import { useTranslation } from '../../../layouts/Layout'
import styles from './PivacyPolicy.module.scss'

export default function PrivacyPolicy() {
    const { t } = useTranslation('legal')

    return (
        <>
            <p className={styles['little-text']}>
                {t.privacyPolicy.intro1}
            </p>

            <p className={styles['little-text']}>
                {t.privacyPolicy.intro2}
            </p>

            <h5>{t.privacyPolicy.section1_heading}</h5>
            <p className={styles['little-text']}>
                {t.privacyPolicy.section1_text}
            </p>

            <h5>{t.privacyPolicy.section2_heading}</h5>
            <p className={styles['little-text']}>
                {t.privacyPolicy.section2_text}
            </p>

            <h5>{t.privacyPolicy.section3_heading}</h5>
            <p className={styles['little-text']}>
                {t.privacyPolicy.section3_text}
            </p>

            <h5>{t.privacyPolicy.section4_heading}</h5>
            <p className={styles['little-text']}>
                {t.privacyPolicy.section4_text}
            </p>
        </>
    )
}
