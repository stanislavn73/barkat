import Slider from '../ui-kit/Slider/Slider'
import FullPage from '../ui-kit/FullPage'
import { HeaderThumb } from '../ui-kit/Header'
import { mainSlides } from '../utils/slider'
import { useTranslation } from '../layouts/Layout'
import styles from './HomePage.module.scss'

function HomePage() {
    const { t } = useTranslation('home')

    const titlesRules = [
        {
            titles: [0, 1, 2, 3],
            title: 'Barkat-Stein',
            subTitle: t.heroTaglines.facadeChallengers,
            link: '/facades',
        },
        {
            titles: [4, 5, 6, 7],
            title: 'Barkat-3D-Ville',
            subTitle: t.heroTaglines.digitalTwinConceptors,
            link: '/soft',
        },
        {
            titles: [8, 9, 10],
            title: 'Barkat-Engineering',
            subTitle: t.heroTaglines.engineeringNetworkModernizers,
            link: '/engineer-nets',
        },
        {
            titles: [11, 12, 13, 14],
            title: 'Barkat-Agrospatial',
            subTitle: t.heroTaglines.makingFarmersDigital,
            link: '/agro-solutions',
        },
    ]

    return (
        <>
            <HeaderThumb />
            <FullPage className={styles['home-full-page']}>
                <Slider
                    title='Barkat Stein'
                    slides={mainSlides}
                    titlesControl={titlesRules}
                />
            </FullPage>
        </>
    )
}

export default HomePage
