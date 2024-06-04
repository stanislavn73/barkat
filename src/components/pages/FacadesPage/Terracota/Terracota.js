import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesTerracotaSlides from '../../../utils/facades/terracota'
import terracota_first_type from '../../../../../public/images/facades/terracota/types/01.jpg'
import terracota_second_type from '../../../../../public/images/facades/terracota/types/02.jpg'
import system from '../../../../../public/images/facades/terracota/system/system.jpg'

import catalog from '../../../../../public/images/facades/terracota/catalog.pdf'
import catalog_color from '../../../../../public/images/facades/terracota/catalog_color.pdf'

import styles from './Terracota.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

export default function Terracota({ id }) {
    const { t } = useTranslation('facades')
    const trans = get(t, id)

    return (
        <FacadesWrapper className={styles['terracota-block']}>
            <FullPage>
                <Title>{get(trans, 'title')}</Title>
                <ImageSlides data={facadesTerracotaSlides} />
            </FullPage>
            <Padded>
                <SubTitle>{get(trans, 'subTitle')[0]}</SubTitle>
                {get(trans, 'descArray').map(item => (
                    <p key={item}>{item}</p>
                ))}

                <SubTitle>{get(trans, 'subTitle')[1]}</SubTitle>
                <div className={styles['terracota-images-wrapper']}>
                    <div className={styles['terracota-image-item']}>
                        <FullscreenImg src={terracota_first_type} />
                    </div>
                    <div className={styles['terracota-download-item']}>
                        <DownloadCatalog file={catalog} />
                    </div>
                </div>
                <div className={styles['terracota-images-wrapper']}>
                    <div className={styles['terracota-image-item']}>
                        <FullscreenImg src={terracota_second_type} />
                    </div>
                    <div className={styles['terracota-download-item']}>
                        <DownloadCatalog file={catalog_color} />
                    </div>
                </div>
                <SubTitle>{get(trans, 'subTitle')[2]}</SubTitle>
                <div
                    className={`${styles['terracota-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['terracota-system']}>
                        <FullscreenImg src={system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <div>
                            <SubTitle>
                                {get(trans, 'constructions.title')}
                            </SubTitle>
                            {get(trans, 'constructions.textArray').map(text => (
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                        <div>
                            <SubTitle>
                                {get(trans, 'advantages.title')}
                            </SubTitle>
                            {get(trans, 'advantages.textArray').map(text => (
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
