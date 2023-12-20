import React from 'react'
import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesClinkerstoneSlides from '../../../utils/facades/clinkerstone'
import coral_star from '../../../../../public/images/facades/clinkerstone/types/Coral_star.jpg'
import marrakesh_dust from '../../../../../public/images/facades/clinkerstone/types/Marrakesh_dust.jpg'
import silver_rose from '../../../../../public/images/facades/clinkerstone/types/Silver_rose.jpg'
import snow_brick from '../../../../../public/images/facades/clinkerstone/types/Snow_brick.jpg'
import argon_wall from '../../../../../public/images/facades/clinkerstone/types/Argon_wall.jpg'
import dry_system from '../../../../../public/images/facades/clinkerstone/system/dry-system.jpg'
import wet_system from '../../../../../public/images/facades/clinkerstone/system/wet-system.jpg'

import catalog from '../../../../../public/images/facades/clinkerstone/catalog.pdf'

import styles from './Clinkerstone.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

export default function Clinkerstone({ id }) {
    const { t } = useTranslation('facades')
    const trans = get(t, id)
    const subTitles = get(trans, 'subTitle')
    const imagesTitles = get(trans, 'imagesTitles')

    return (
        <FacadesWrapper className={styles['facades-sixth-block']}>
            <FullPage>
                <Title>{get(trans, 'title')}</Title>
                <ImageSlides data={facadesClinkerstoneSlides} />
            </FullPage>
            <Padded>
                <SubTitle>{subTitles[0]}</SubTitle>
                {get(trans, 'textArray').map(text => (
                    <p key={text}>{text}</p>
                ))}

                <SubTitle>{subTitles[1]}</SubTitle>
                <div className={styles['clinkerstone-images-wrapper']}>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={coral_star} />
                        <div className={styles['clinkerstone-image-title']}>
                            {imagesTitles[0]}
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={marrakesh_dust} />
                        <div className={styles['clinkerstone-image-title']}>
                            {imagesTitles[1]}
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={silver_rose} />
                        <div className={styles['clinkerstone-image-title']}>
                            {imagesTitles[2]}
                        </div>
                    </div>
                </div>
                <div className={styles['clinkerstone-images-wrapper']}>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={snow_brick} />
                        <div className={styles['clinkerstone-image-title']}>
                            {imagesTitles[3]}
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={argon_wall} />
                        <div className={styles['clinkerstone-image-title']}>
                            {imagesTitles[4]}
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <DownloadCatalog
                            className={styles['marble-download-catalog']}
                            file={catalog}
                        />
                    </div>
                </div>
                <SubTitle>{subTitles[2]}</SubTitle>
                <div
                    className={`${styles['clinkerstone-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <FullscreenImg
                        src={dry_system}
                        className={styles['clinkerstone-system']}
                    />
                    <div>
                        <div>
                            <SubTitle>
                                {get(trans, 'constructionsGrout.title')}
                            </SubTitle>
                            {get(trans, 'constructionsGrout.textArray').map(
                                text => (
                                    <p key={text}>{text}</p>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <SubTitle>{subTitles[3]}</SubTitle>
                <div
                    className={`${styles['clinkerstone-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['clinkerstone-system']}>
                        <FullscreenImg src={wet_system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <div>
                            <SubTitle>
                                {get(trans, 'constructionsDry.title')}
                            </SubTitle>
                            {get(trans, 'constructionsDry.textArray').map(
                                text => (
                                    <p key={text}>{text}</p>
                                )
                            )}
                        </div>
                        <div>
                            <SubTitle>
                                {get(trans, 'advantagesDry.title')}
                            </SubTitle>
                            {get(trans, 'advantagesDry.textArray').map(text => (
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
