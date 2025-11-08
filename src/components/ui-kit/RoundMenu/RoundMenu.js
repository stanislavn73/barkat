import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
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
                    <Img src={logo} />
                </span>
                <div className={styles.wrap}>
                    <a
                        href='#'
                        style={{
                            backgroundImage: `url(${about})`,
                        }}
                        onClick={() => {
                            router.push('/about_us')
                        }}
                    >
                        <div>{t('navigation.aboutUs')}</div>
                    </a>
                    <a
                        href='#'
                        style={{
                            backgroundImage: `url(${engineer})`,
                        }}
                        onClick={() => {
                            router.push('/soft')
                        }}
                    >
                        <div>{t('navigation.engineeringNetworks')}</div>
                    </a>
                    <a
                        href='#'
                        style={{
                            backgroundImage: `url(${facades})`,
                        }}
                        onClick={() => {
                            router.push('/facades')
                        }}
                    >
                        <div>{t('navigation.ventilatedFasades')}</div>
                    </a>
                    <a
                        href='#'
                        style={{
                            backgroundImage: `url(${soft})`,
                        }}
                        onClick={() => {
                            router.push('/soft')
                        }}
                    >
                        <div>{t('navigation.threeDSolutions')}</div>
                    </a>
                    <a href='#'>
                        <Img src={logo} />
                    </a>
                </div>
            </div>
        )
    )
}

export default RoundMenu
