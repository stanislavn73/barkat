import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import cx from 'classnames'

import logo from '../../../../public/images/Logo_new.svg'
import engineer from '../../../../public/images/marble-system.jpg'
import about from '../../../../public/images/pages/About_us_third.jpg'
import facades from '../../../../public/images/facades/clinkerstone/04.jpg'
import soft from '../../../../public/images/pages/soft/title-back.jpg'
import styles from './styles.module.scss'
import Img from '../Img'

function RoundMenu({ children, className }) {
    const { t } = useTranslation('common')
    const [isActive, setIsActive] = useState(false)
    const [isDisplay, setIsDisplay] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true)
            setTimeout(() => {
                setIsDisplay(true)
            })
        }, 0)
    }, [])

    const router = useRouter()

    const spanCX = cx({
        active: isDisplay,
    })

    return (
        isActive && (
            <div className={styles['round-menu-wrapper']}>
                <span className={spanCX}>
                    <Img src={logo} alt="Logo" width={200} height={200} />
                </span>
                <div className={styles.wrap}>
                    <a
                        href='#'
                        style={{ position: 'relative', overflow: 'hidden' }}
                        onClick={() => {
                            router.push('/about_us')
                        }}
                    >
                        <Img
                            src={about}
                            fill
                            alt="About Us"
                            sizes="40vw"
                            quality={90}
                        />
                        <div>{t('navigation.aboutUs')}</div>
                    </a>
                    <a
                        href='#'
                        style={{ position: 'relative', overflow: 'hidden' }}
                        onClick={() => {
                            router.push('/soft')
                        }}
                    >
                        <Img
                            src={engineer}
                            fill
                            alt="Engineering Networks"
                            sizes="40vw"
                            quality={90}
                        />
                        <div>{t('navigation.engineeringNetworks')}</div>
                    </a>
                    <a
                        href='#'
                        style={{ position: 'relative', overflow: 'hidden' }}
                        onClick={() => {
                            router.push('/facades')
                        }}
                    >
                        <Img
                            src={facades}
                            fill
                            alt="Ventilated Facades"
                            sizes="40vw"
                            quality={90}
                        />
                        <div>{t('navigation.ventilatedFasades')}</div>
                    </a>
                    <a
                        href='#'
                        style={{ position: 'relative', overflow: 'hidden' }}
                        onClick={() => {
                            router.push('/soft')
                        }}
                    >
                        <Img
                            src={soft}
                            fill
                            alt="3D Solutions"
                            sizes="40vw"
                            quality={90}
                        />
                        <div>{t('navigation.threeDSolutions')}</div>
                    </a>
                    <a href='#'>
                        <Img src={logo} alt="Logo" width={200} height={200} />
                    </a>
                </div>
            </div>
        )
    )
}

export default RoundMenu
