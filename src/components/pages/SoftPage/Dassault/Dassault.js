import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import DassaultLogo from '../../../../../public/images/Dassault.png'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const allPlanItems = [
    {
        id: 1,
        title: '3DEXPERIENCE',
        type: '3DExperience',
    },
    {
        id: 2,
        title: 'DraftSight',
        type: 'draftSight',
    },
    {
        id: 3,
        title: 'CATIA',
        type: 'catia',
    },
    {
        id: 4,
        title: 'ENOVIA',
        type: 'enovia',
    },
    {
        id: 5,
        title: 'DELMIA',
        type: 'delmia',
    },
    {
        id: 7,
        title: 'SIMULIA',
        type: 'simulia',
    },
    {
        id: 8,
        type: 'dassaultOil',
    },
    {
        id: 9,
        type: 'dassaultBuilding',
    },
    {
        id: 10,
        type: 'dassaultPlanning',
    },
    {
        id: 11,
        type: 'dassaultClone',
    },
]

const Dassault = () => {
    const { t } = useTranslation()
    const { soft: tSoft } = t

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>
                        Dassault Systèmes
                    </div>
                    <SocialMedia page='Dassault' />
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    {tSoft.dassaultSystemes}
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    <a href='http://www.3ds.com'>http://www.3ds.com</a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {allPlanItems.map(({ type, id, title }) => (
                        <div key={id} className={styles['soft-item']}>
                            <Img
                                className={styles['logo']}
                                src={DassaultLogo}
                            />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className={styles['title']}
                                        onClick={handleOpenSoftModal(type)}
                                    >
                                        {title || tSoft[type].title}
                                    </div>
                                )}
                            </ModalConsumer>
                            <PlainText className={styles['item-text']}>
                                {tSoft[type].about}
                            </PlainText>
                            <ModalConsumer>
                                {({ handleOpenForm }) => (
                                    <div
                                        className={styles['button']}
                                        onClick={handleOpenForm}
                                    >
                                        {t.common.contactUsButton}
                                    </div>
                                )}
                            </ModalConsumer>
                        </div>
                    ))}
                </div>
            </Padded>
        </FullPage>
    )
}

export default Dassault
