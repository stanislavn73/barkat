import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import IconsBlock from '../../../ui-kit/IconsBlock'
import Img from '../../../ui-kit/Img'
import styles from './SecondScreen.module.scss'

import achievements from '../../../utils/achievements'
import * as backgroundImage from '../../../../../public/images/pages/About_us_second.jpg'

function ProjectsSecondScreen() {
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
