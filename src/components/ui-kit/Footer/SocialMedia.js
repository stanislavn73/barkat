import styles from './Social.module.scss'

export default function SocialMedia() {
    return (
        <div className={styles['social-wrapper1']}>
            <button
                className={styles['facebook1']}
                onClick={() =>
                    window.open(
                        'https://www.facebook.com/Barkat-Stein-100872801796847'
                    )
                }
            ></button>
            <button
                className={styles['insta1']}
                onClick={() =>
                    window.open('https://www.instagram.com/barkat_stein/?hl=ru')
                }
            ></button>
            <button
                className={styles['linkedin1']}
                onClick={() =>
                    window.open(
                        'https://www.linkedin.com/company/65744024/admin/'
                    )
                }
            ></button>
        </div>
    )
}
