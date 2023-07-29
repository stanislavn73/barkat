import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import AutodeskLogo from '../../../../../public/images/Autodesk.jpg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const Autodesk = () => {
    const { t } = useTranslation()
    const {
        soft: tSoft,
        common: { contactUsButton },
    } = t

    const allPlanItems = [
        {
            id: 1,
            title: 'REVIT',
            type: 'REVIT',
            text: tSoft.revit.resume,
        },
        {
            id: 2,
            type: 'AUTOCAD',
            title: 'AutoCAD',
            text: tSoft.autocad.resume,
        },
        {
            id: 3,
            title: 'Autodesk AEC Collection',
            type: 'AUTODESK_AEC_COLLECTION',
            text: tSoft.aec.resume,
        },
        {
            id: 4,
            title: 'Autodesk Navisworks',
            type: 'NAVISWORKS',
            text: tSoft.navisworks.resume,
        },
        {
            id: 5,
            title: 'Autodesk Civil 3D',
            type: 'CIVIL_3D',
            text: tSoft.civil3d.resume,
        },
    ]

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>Autodesk</div>
                    <SocialMedia page='Autodesk' />
                </div>

                {tSoft.autodesk.resume.map(item => (
                    <PlainText className={styles['soft-plain-text']}>
                        {item}
                    </PlainText>
                ))}

                <PlainText className={styles['soft-plain-text']}>
                    <a href='https://www.autodesk.ru/'>www.autodesk.ru</a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {allPlanItems.map(item => (
                        <div key={item.id} className={styles['soft-item']}>
                            <Img
                                className={styles['logo']}
                                src={AutodeskLogo}
                            />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className={styles['title']}
                                        onClick={handleOpenSoftModal(item.type)}
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </ModalConsumer>
                            <PlainText className={styles['item-text']}>
                                {item.text}
                            </PlainText>
                            <ModalConsumer>
                                {({ handleOpenForm }) => (
                                    <div
                                        className={styles['button']}
                                        onClick={handleOpenForm}
                                    >
                                        {contactUsButton}
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

export default Autodesk
