import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesMarbleSlides from '../../../utils/facades/marble'
import skin_marble from '../../../../../public/images/facades/marble/types/skin_marble.jpg'
import gray_marble from '../../../../../public/images/facades/marble/types/gray_marble.jpg'
import gray_marble_blurred from '../../../../../public/images/facades/marble/types/gray_marble_blurred.jpg'
import dolomite from '../../../../../public/images/facades/marble/types/dolomite.jpg'
import traverteen from '../../../../../public/images/facades/marble/types/traverteen.jpg'
import system from '../../../../../public/images/facades/marble/system/marble-system.jpg'

import catalog from '../../../../../public/images/facades/marble/catalog.pdf'

import styles from './MarbleBlock.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

export default function MarbleBlock({ id }) {
    const { t } = useTranslation('facades')
    const trans = get(t, id)

    return (
        <FacadesWrapper className={styles['facades-sixth-block']}>
            <FullPage>
                <Title>{get(trans, 'title')}</Title>
                <ImageSlides data={facadesMarbleSlides} styles={styles} />
            </FullPage>
            <Padded>
                <SubTitle>{get(trans, 'subTitle')[0]}</SubTitle>
                <p>{get(trans, 'desc')}</p>
                <SubTitle>{get(trans, 'subTitle')[1]}</SubTitle>
                <SubTitle>{get(trans, 'subTitle')[2]}</SubTitle>
                <div className={styles['marble-images-wrapper']}>
                    <div className={styles['marble-image-item']}>
                        <FullscreenImg src={skin_marble} />
                        <div className={styles['marble-image-title']}>
                            {get(trans, 'imagesTitles')[0]}
                        </div>
                    </div>
                    <div className={styles['marble-image-item']}>
                        <FullscreenImg src={gray_marble} />
                        <div className={styles['marble-image-title']}>
                            {get(trans, 'subTitle')[1]}
                        </div>
                    </div>
                    <div className={styles['marble-image-item']}>
                        <FullscreenImg src={gray_marble_blurred} />
                        <div className={styles['marble-image-title']}>
                            {get(trans, 'subTitle')[2]}
                        </div>
                    </div>
                </div>
                <div className={styles['mable-horizontal-wrapper']}>
                    <div>
                        <SubTitle>{get(trans, 'subTitle')[3]}</SubTitle>
                        <div className={styles['marble-images-wrapper']}>
                            <div className={styles['marble-image-item']}>
                                <FullscreenImg src={dolomite} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <SubTitle>{get(trans, 'subTitle')[4]}</SubTitle>
                        <div className={styles['marble-images-wrapper']}>
                            <div className={styles['marble-image-item']}>
                                <FullscreenImg src={traverteen} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles['marble-image-item']}>
                            <DownloadCatalog
                                className={styles['marble-download-catalog']}
                                file={catalog}
                            />
                        </div>
                    </div>
                </div>
                <SubTitle>{get(trans, 'subTitle')[5]}</SubTitle>
                <div
                    className={`${styles['marble-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['marble-system']}>
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
