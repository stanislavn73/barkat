import FullPage from '../../../ui-kit/FullPage/FullPage'
import Img from '../../../ui-kit/Img'

import styles from './SecondScreen.module.scss'

import facadesIcons from '../../../utils/facades_preferences'
import * as backgroundImage from '../../../../../public/images/pages/facades/2back.jpg'

import IconsFader from './IconsFader'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

const ProjectsSecondScreen = ({ id }) => {
    const { t } = useTranslation('facades')
    return (
        <FullPage min className={styles['facades-second-wrapper']}>
            <Img src={backgroundImage} className={styles.back} />
            <IconsFader>
                {facadesIcons.slice(0, 3).map(el => (
                    <div className={styles['icon-wrapper']} key={el.id}>
                        <Img src={el.icon} className={styles.icon} />
                        <div>{get(t, `${id}.${el.id}`)}</div>
                    </div>
                ))}
            </IconsFader>
            <IconsFader delay={1000}>
                {facadesIcons.slice(3, 6).map(el => (
                    <div className={styles['icon-wrapper']} key={el.id}>
                        <Img src={el.icon} className={styles.icon} />
                        <div>{get(t, `${id}.${el.id}`)}</div>
                    </div>
                ))}
            </IconsFader>
            <IconsFader delay={2000}>
                {facadesIcons.slice(6, 9).map(el => (
                    <div className={styles['icon-wrapper']} key={el.id}>
                        <Img src={el.icon} className={styles.icon} />
                        <div>{get(t, `${id}.${el.id}`)}</div>
                    </div>
                ))}
            </IconsFader>
            <IconsFader delay={3000}>
                {facadesIcons.slice(9, 12).map(el => (
                    <div className={styles['icon-wrapper']} key={el.id}>
                        <Img src={el.icon} className={styles.icon} />
                        <div className={styles.text}>
                            {get(t, `${id}.${el.id}`)}
                        </div>
                    </div>
                ))}
            </IconsFader>
        </FullPage>
    )
}

export default ProjectsSecondScreen
