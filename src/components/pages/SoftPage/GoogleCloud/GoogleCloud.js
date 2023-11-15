import styles from '../SoftPage.module.scss'
import React from 'react'
import FullPage from '../../../ui-kit/FullPage'
import Padded from '../../../ui-kit/Padded'
import PlainText from '../../../ui-kit/PlainText'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import Img from '../../../ui-kit/Img'
import GoogleCloudLogo from '../../../../../public/images/googleCloud.png'

export const GoogleCloud = () => {
    const { t } = useTranslation('soft')
    const {
        t: { contactUsButton },
    } = useTranslation('common')

    const googleCloudItems = [
        {
            id: 1,
            title: 'StratoZone',
            type: 'stratoZone',
            text: t.stratoZone.resume,
        },
        {
            id: 2,
            title: 'VMWare Engine',
            type: 'vmWare',
            text: t.vmWare.resume,
        },
        {
            id: 3,
            title: 'Big Query Machine Learning',
            type: 'bigQuery',
            text: t.bigQuery.resume,
        },
        {
            id: 4,
            title: 'Google Cloud Networking',
            type: 'networking',
            text: t.networking.resume,
        },
        {
            id: 5,
            title: 'Distributed Cloud',
            type: 'distributedCloud',
            text: t.distributedCloud.resume,
        },
        {
            id: 6,
            title: 'Security and Identity Chronicle',
            type: 'security',
            text: t.security.resume,
        },
        {
            id: 7,
            title: 'Google Cloud Storage',
            type: 'cloudStorage',
            text: t.cloudStorage.resume,
        },
        {
            id: 8,
            title: 'Google Cloud Databases',
            type: 'cloudDatabases',
            text: t.cloudDatabases.resume,
        },
        {
            id: 9,
            title: 'Google API',
            type: 'api',
            text: t.api.resume,
        },
        {
            id: 10,
            title: 'Google Kubernetes Engine',
            type: 'googleKubernetes',
            text: t.googleKubernetes.resume,
        },
        {
            id: 11,
            title: 'Google Cloud Compute Engine',
            type: 'computeEngine',
            text: t.computeEngine.resume,
        },
        {
            id: 12,
            title: 'Artificial Intelligence (AI) Google Bard',
            type: 'bard',
            text: t.bard.resume,
        },
    ]

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>
                        Google Cloud
                    </div>
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    {t.googleCloud}
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {googleCloudItems.map(item => (
                        <div key={item.id} className={styles['soft-item']}>
                            <Img
                                className={styles['logo']}
                                src={GoogleCloudLogo}
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
