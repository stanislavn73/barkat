import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import * as sketchupLogo from '../../../../../public/images/pages/soft/sketchup-logo1.svg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'
import Link from 'next/link'

const sketchupItems = [
    {
        id: 3,
        title: 'SketchUp Free',
        type: 'sketchUpFree',
        buyIt: true,
    },
    {
        id: 6,
        title: 'SketchUp Shop',
        type: 'sketchUpShop',
        buyIt: true,
    },
    {
        id: 1,
        title: 'SketchUp Pro',
        type: 'sketchUpPro',
        buyIt: true,
    },
    {
        id: 5,
        title: 'SketchUp Studio',
        type: 'sketchUpStudio',
        buyIt: true,
    },
    {
        id: 7,
        title: 'SketchUp для высшего образования',
        type: 'sketchUpEducation',
        buyIt: true,
    },
    {
        id: 4,
        title: 'Trimble Connect',
        type: 'trimbleConnect',
        buyIt: false,
    },
    {
        id: 2,
        title: 'Extension Warehouse',
        type: 'extensionWarehouse',
        buyIt: false,
    },
]

const SketchUp = () => {
    const { t } = useTranslation()
    const { soft: tSoft } = t

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>SketchUp</div>
                    <SocialMedia page='SketchUp' />
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    {tSoft.sketchUp}
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    <a href='https://www.sketchup.com/'>www.sketchup.com</a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {sketchupItems.map(({ id, buyIt, type, title }) => (
                        <div key={id} className={styles['soft-item']}>
                            <Img
                                className={styles['logo']}
                                src={sketchupLogo}
                            />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className={`${
                                            title.includes('SketchUp')
                                                ? styles['title_SketchUp']
                                                : styles.title
                                        }`}
                                        onClick={handleOpenSoftModal(type)}
                                    >
                                        {title || tSoft[type].title}
                                    </div>
                                )}
                            </ModalConsumer>
                            <PlainText className={styles['item-text']}>
                                {tSoft[type]?.about}
                            </PlainText>
                            <div className={styles['button-container']}>
                                {buyIt && (
                                    <Link
                                        key='910'
                                        href='/buy-sketchup'
                                        className={styles.buyIt}
                                    >
                                        <div className={`${styles.button}`}>
                                            {t.common.buyButton}
                                        </div>
                                    </Link>
                                )}
                                <ModalConsumer>
                                    {({ handleOpenForm }) => (
                                        <div
                                            className={styles.button}
                                            onClick={handleOpenForm}
                                        >
                                            {t.common.contactUsButton}
                                        </div>
                                    )}
                                </ModalConsumer>
                            </div>
                        </div>
                    ))}
                </div>
            </Padded>
        </FullPage>
    )
}

export default SketchUp
