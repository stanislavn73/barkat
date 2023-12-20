import React from 'react'
import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesPorcelianTileSlides from '../../../utils/facades/porcelianTile'
import porcelian_tile_colors from '../../../../../public/images/facades/porcelian-tile/types/01.pdf'
import porcelian_tile_type from '../../../../../public/images/facades/porcelian-tile/types/02.jpg'
import system from '../../../../../public/images/facades/porcelian-tile/system/system.jpg'

import catalog from '../../../../../public/images/facades/porcelian-tile/catalog.pdf'

import styles from './PorcelainTile.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'
import { get } from '../../../utils/facades/get'
import { useTranslation } from '../../../layouts/Layout'

export default function PorcelainTile({ id }) {
    const { t } = useTranslation('facades')
    const trans = get(t, id)

    return (
        <FacadesWrapper className={styles['porcelian-tile-block']}>
            <FullPage>
                <Title>{get(trans, 'title')}</Title>
                <ImageSlides data={facadesPorcelianTileSlides} />
            </FullPage>
            <Padded>
                <SubTitle>{get(trans, 'subTitle')[0]}</SubTitle>
                {get(trans, 'descArray').map(item => (
                    <p key={item}>{item}</p>
                ))}
                <SubTitle>{get(trans, 'subTitle')[1]}</SubTitle>
                <div className={styles['porcelian-tile-images-wrapper']}>
                    <div className={styles['porcelian-tile-image-item']}>
                        <FullscreenImg src={porcelian_tile_type} />
                    </div>
                    <div className={styles['porcelian-tile-download-item']}>
                        <DownloadCatalog
                            file={porcelian_tile_colors}
                            name='Цветовая линейка Керамогранит'
                            title='Детальнее по цветовой гамме'
                        />
                        <DownloadCatalog
                            file={catalog}
                            name='Каталог Керамогранит'
                        />
                    </div>
                </div>
                <SubTitle>{get(trans, 'subTitle')[2]}</SubTitle>
                <div
                    className={`${styles['porcelian-tile-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['porcelian-tile-system']}>
                        <FullscreenImg src={system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <div>
                            <SubTitle>
                                {get(trans, 'constructions.title')}
                            </SubTitle>
                            {get(trans, 'constructions.textArray').map(item => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                        <div>
                            <SubTitle>
                                {get(trans, 'advantages.title')}
                            </SubTitle>
                            {get(trans, 'advantages.textArray').map(item => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
