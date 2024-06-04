import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesArtificalStoneSlides from '../../../utils/facades/artificalStone'
import artifical_stone_type from '../../../../../public/images/facades/artifical-stone/types/01.jpg'
import system from '../../../../../public/images/facades/artifical-stone/system/system.jpg'
import cx from 'classnames'

import catalog from '../../../../../public/images/facades/artifical-stone/catalog.pdf'

import styles from './ArtificalStone.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

export default function ArtificalStone({ id }) {
    const { t } = useTranslation('facades')
    const trans = get(t, id)

    return (
        <FacadesWrapper className={styles['artifical-stone-block']}>
            <FullPage>
                <Title>{get(trans, 'title')}</Title>
                <ImageSlides data={facadesArtificalStoneSlides} />
            </FullPage>
            <Padded>
                <SubTitle>{get(trans, 'subTitle')[0]}</SubTitle>
                {get(trans, 'descArray').map(item => (
                    <p key={item}>{item}</p>
                ))}
                <SubTitle>{get(trans, 'subTitle')[1]}</SubTitle>
                <div className={styles['artifical-stone-images-wrapper']}>
                    <div className={styles['artifical-stone-image-item']}>
                        <FullscreenImg src={artifical_stone_type} />
                    </div>
                    <div className={styles['artifical-stone-download-item']}>
                        <DownloadCatalog file={catalog} />
                    </div>
                </div>
                <SubTitle>{get(trans, 'subTitle')[2]}</SubTitle>
                <div
                    className={cx(
                        styles['artifical-stone-system-wrapper'],
                        styles['facades-system-wrapper']
                    )}
                >
                    <div className={styles['artifical-stone-system']}>
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
