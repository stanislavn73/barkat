import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Link from 'next/link'

import Img from '../Img'
import { PAGES } from './pages'

import * as menu from '../../../../public/images/icons/menu.png'
import * as close from '../../../../public/images/icons/close.png'
import * as logo from '../../../../public/images/logo.png'
import * as logoU from '../../../../public/images/logo_u.png'
import * as logoVille from '../../../../public/images/logo-ville.png'

import styles from './style.module.scss'

const routes = {
    HOME: '/',
    ABOUT_US: '/about_us',
    FACADES: '/facades',
    SOFT: '/soft',
    EVENTS: '/events',
    BUYSKETCHUP: '/buy-sketchup',
    SUCCESS: '/payment-success',
}

const LOGOS = {
    [routes.HOME]: logoU,
    [routes.ABOUT_US]: logoU,
    [routes.FACADES]: logo,
    [routes.SOFT]: logoVille,
    [routes.EVENTS]: logoU,
    [routes.BUYSKETCHUP]: logoU,
    [routes.SUCCESS]: logoU,
}

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [shrinked, setShrinked] = useState(false)
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('scroll', onPageScroll)

        return () => window.removeEventListener('scroll', onPageScroll)
    }, [])

    function onPageScroll() {
        const scrollTop = window.pageYOffset

        if (scrollTop > 300) {
            setShrinked(true)
        } else {
            setShrinked(false)
        }
    }

    function handleMenuClick() {
        setIsMenuActive(true)
    }

    function handleMenuItemClick() {
        setIsMenuActive(false)
    }

    function handleClose() {
        setIsMenuActive(false)
    }

    const logoPage = PAGES[0]
    const menuButtons = PAGES.filter(page => page.isMenu)

    const menuCX = cx(
        styles['menu-wrapper'],
        isMenuActive && styles['menu-wrapper_active']
    )

    const headerCX = cx(
        styles['header-wrapper'],
        shrinked && styles['header-wrapper_shrinked'],
        isMenuActive && styles['header-wrapper_active']
    )

    return (
        <div className={headerCX}>
            <div className={styles['orange-line']} />
            <div className={styles['header-contacts-wrapper']}>
                <Link href={logoPage.route} className={styles['menu-item']}>
                    <Img className={styles['logo']} src={logo} />
                    <Img
                        className={cx(styles.logo, styles['logo-mobile'])}
                        src={LOGOS[router.route]}
                    />
                </Link>
                <Img
                    className={cx(styles.logo, styles['logo-ville'])}
                    src={logoVille}
                />
                <Img
                    className={styles['menu-icon']}
                    src={menu}
                    onClick={handleMenuClick}
                />
            </div>
            <div className={menuCX}>
                <div className={styles.menu}>
                    {menuButtons.map(page => {
                        const menuItemCX = cx(styles['menu-item'], {
                            [styles['menu-item_active']]:
                                router.route === page.route,
                            [styles['menu-item_disabled']]: page.disabled,
                        })

                        return (
                            <Link
                                key={page.id}
                                href={page.route}
                                className={menuItemCX}
                                onClick={handleMenuItemClick}
                            >
                                {page.name}
                            </Link>
                        )
                    })}
                </div>
                <Img
                    className={styles['close-icon']}
                    src={close}
                    onClick={handleClose}
                />
            </div>
        </div>
    )
}

export default Header
