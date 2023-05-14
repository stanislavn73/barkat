import styles from './Social.module.scss'

export default function SocialMediaFooter() {
    return (
        <div className={styles['social-wrapper1']}>
            <a
                className={styles['facebook1']}
                target='#'
                href='https://www.facebook.com/Barkat-Stein-100872801796847'
            ></a>
            <a
                className={styles['insta1']}
                target='#'
                href='https://www.instagram.com/barkat_stein/?hl=ru'
            ></a>
            <a
                className={styles['linkedin1']}
                target='#'
                href='https://www.linkedin.com/company/65744024/admin/'
            ></a>
        </div>
    )
}
