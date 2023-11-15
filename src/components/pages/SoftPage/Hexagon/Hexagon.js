import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer, useTranslation } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import HexagonLogo from '../../../../../public/images/Hexagon.jpg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const allPlanItems = [
    {
        id: 1,
        title: 'GeoMedia',
        type: 'geoMedia',
    },
    {
        id: 2,
        title: 'ERDAS IMAGINE',
        type: 'erdasImagine',
    },
    {
        id: 3,
        title: 'ImageStation',
        type: 'imageStation',
    },
    {
        id: 4,
        title: 'ERDAS APOLLO',
        type: 'erdasApollo',
    },
    {
        id: 5,
        title: 'M.App Enterprise',
        type: 'mAppEnterprise',
    },
    {
        id: 6,
        title: 'Luciad',
        type: 'luciad',
    },
    {
        id: 7,
        type: 'genPlan',
    },
]

const Hexagon = () => {
    const { t } = useTranslation()
    const { soft: tSoft } = t

    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>Hexagon</div>
                    <SocialMedia page='Hexagon' />
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    {tSoft.hexagon}
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    <a href='http://www.hexagongeospatial.com'>
                        www.hexagongeospatial.com
                    </a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {allPlanItems.map(({ id, type, title }) => (
                        <div key={id} className={styles['soft-item']}>
                            <Img className={styles['logo']} src={HexagonLogo} />
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

export default Hexagon
