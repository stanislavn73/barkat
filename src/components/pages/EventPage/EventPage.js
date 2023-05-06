import SocialMedia from '../../ui-kit/SocialMedia/SocialMedia'
import FirstScreen from './FirstScreen'
import Padded from '../../ui-kit/Padded'
import * as logoVille from '../../../../public/images/logo-ville.png'
import * as logo from '../../../../public/images/logo.png'
import Img from '../../ui-kit/Img'

import styles from './EventPage.module.scss'

function Eventpage() {
    return (
        <>
            <FirstScreen />
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['social-media-block']}>
                    <Img className={styles.logo} src={logo} />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>
                        Вентилируемые фасады
                    </div>
                    <SocialMedia page='logo' />
                </div>
                <div className={styles['social-media-block']}>
                    <Img className={styles.logo} src={logoVille} />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>Autodesk</div>
                    <SocialMedia page='Autodesk' />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>
                        Dassault Systèmes
                    </div>
                    <SocialMedia page='Dassault' />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>Hexagon</div>
                    <SocialMedia page='Hexagon' />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>Bentley</div>
                    <SocialMedia page='Bentley' />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>SketchUp</div>
                    <SocialMedia page='SketchUp' />
                </div>
                <div className={styles['social-media-block']}>
                    <div className={styles['soft-block-title']}>AllPlan</div>
                    <SocialMedia page='AllPlan' />
                </div>
            </Padded>
        </>
    )
}

export default Eventpage
