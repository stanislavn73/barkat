import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import IconsBlock from '../../../ui-kit/IconsBlock'
import Img from '../../../ui-kit/Img'
import { useTranslation } from '../../../layouts/Layout'
import styles from './SecondScreen.module.scss'

import * as clock from '../../../../../public/images/icons/clock.png'
import * as graph from '../../../../../public/images/icons/graph.png'
import * as box from '../../../../../public/images/icons/box.png'
import * as bag from '../../../../../public/images/icons/shopping-bag.png'
import * as backgroundImage from '../../../../../public/images/pages/About_us_second.jpg'

function ProjectsSecondScreen() {
    const { t } = useTranslation('projects')

    const achievements = [
        {
            icon: clock,
            boldText: '50',
            text: t.achievements.yearsExperience,
        },
        {
            icon: box,
            boldText: '5',
            text: t.achievements.countries,
        },
        {
            icon: graph,
            boldText: '10',
            text: t.achievements.vendors,
        },
        {
            icon: bag,
            boldText: '50',
            text: t.achievements.products,
        },
    ]

    return (
        <FullPage>
            <div className={styles['icons-wrapper']}>
                <Padded>
                    <IconsBlock items={achievements} />
                </Padded>
            </div>
            <div className={styles['screen-wrapper']}>
                <Img className={styles.screen} src={backgroundImage} />
            </div>
        </FullPage>
    )
}

export default ProjectsSecondScreen
