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
            title: t.sections.facadeChallengers.title,
            subTitle: t.sections.facadeChallengers.subTitle,
            link: '/facades',
        },
        {
            titles: [4, 5, 6, 7],
            title: t.sections.digitalTwin.title,
            subTitle: t.sections.digitalTwin.subTitle,
            link: '/soft',
        },
        {
            titles: [8, 9, 10],
            title: t.sections.engineering.title,
            subTitle: t.sections.engineering.subTitle,
            link: '/engineer-nets',
        },
        {
            titles: [11, 12, 13, 14],
            title: t.sections.agrospatial.title,
            subTitle: t.sections.agrospatial.subTitle,
            link: '/agro-solutions',
        },
    ]

    return (
        <>
            <HeaderThumb />
            <FullPage className={styles['home-full-page']}>
                <Slider
                    title={t.slider.initialTitle}
                    slides={mainSlides}
                    titlesControl={titlesRules}
                />
            </FullPage>
        </>
    )
}

export default HomePage
