import Image from 'next/image'
import styles from './Social.module.scss'
import facebookIcon from '../../../../../public/images/social/facebook.svg'
import instagramIcon from '../../../../../public/images/social/instagram.svg'
import linkedinIcon from '../../../../../public/images/social/linkedin.svg'

export default function SocialMedia() {
    return (
        <div className={styles['social-wrapper']}>
            <button
                className={styles['facebook']}
                onClick={() =>
                    window.open(
                        'https://www.facebook.com/Barkat-Stein-100872801796847'
                    )
                }
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
            >
                <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={60}
                    height={60}
                />
            </button>
            <button
                className={styles['insta']}
                onClick={() =>
                    window.open('https://www.instagram.com/barkat_stein/?hl=ru')
                }
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
            >
                <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={60}
                    height={60}
                />
            </button>
            <button
                className={styles['linkedin']}
                onClick={() =>
                    window.open(
                        'https://www.linkedin.com/company/65744024/admin/'
                    )
                }
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
            >
                <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={60}
                    height={60}
                />
            </button>
        </div>
    )
}
