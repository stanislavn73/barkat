import React from 'react'
import styles from './Social.module.scss'

const linksObject = {
    Google: {
        facebook: 'https://www.facebook.com/profile.php?id=100083137796657',
        linkedin: 'https://www.linkedin.com/company/google-mentor/',
    },
    Teamviewer: {
        facebook: 'https://www.facebook.com/profile.php?id=100079155813143',
        linkedin: 'https://www.linkedin.com/company/vr-team-centre/\n',
    },
    logo: {
        facebook: 'https://www.facebook.com/Barkat-Stein-100872801796847',
        insta: 'https://www.instagram.com/barkat_stein/?hl=ru',
        linkedin: 'https://www.linkedin.com/company/65744024/admin/',
    },
    Autodesk: {
        facebook: 'https://www.facebook.com/BIMmakers-103432894707756',
        insta: 'https://www.instagram.com/bim_maker/?igshid=fnhm7gyiwqr8',
        linkedin: 'https://www.linkedin.com/showcase/66204395/admin/',
    },
    AllPlan: {
        facebook: 'https://www.facebook.com/BIMmakers-103432894707756',
        insta: 'https://www.instagram.com/bim_maker/?igshid=fnhm7gyiwqr8',
        linkedin: 'https://www.linkedin.com/showcase/66204395/admin/',
    },
    Hexagon: {
        facebook: 'https://www.facebook.com/GISmakers-101893618196499',
        linkedin: 'https://www.linkedin.com/showcase/66917250/admin/',
    },
    Bentley: {
        facebook: 'https://www.facebook.com/Bentley-Mania-111924173847823',
        insta: 'https://www.instagram.com/bentley_mania/?igshid=1qmhlqq7wudqz',
        linkedin: 'https://www.linkedin.com/showcase/66267291/admin/',
    },
    SketchUp: {
        facebook: 'https://www.facebook.com/SketchUper-107370687641738',
        insta: 'https://www.instagram.com/sketch_uper/?igshid=imjhssni9wh6',
        linkedin: 'https://www.linkedin.com/showcase/65673146/admin/',
    },
}

export default function SocialMedia({ page }) {
    return (
        <>
            <div className={styles['social-wrapper']}>
                <a
                    className={styles['facebook']}
                    target='_blank'
                    href={linksObject[page].facebook}
                ></a>

                {linksObject[page].hasOwnProperty('insta') && (
                    <a
                        className={styles['insta']}
                        target='_blank'
                        href={linksObject[page].insta}
                    ></a>
                )}
                <a
                    className={styles['linkedin']}
                    target='_blank'
                    href={linksObject[page].linkedin}
                ></a>
            </div>
        </>
    )
}
