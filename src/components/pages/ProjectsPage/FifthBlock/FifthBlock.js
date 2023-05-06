import FullPage from '../../../ui-kit/FullPage'
import Padded from '../../../ui-kit/Padded'
import Img from '../../../ui-kit/Img'
import * as firstIcon from '../../../../../public/images/icons/objectA.png'
import * as secondIcon from '../../../../../public/images/icons/objectB.png'
import * as thirdIcon from '../../../../../public/images/icons/objectC.png'
import * as tower from '../../../../../public/images/pages/About_us_fiveth.png'
import styles from './FivethBlock.module.scss'

function ProjectsFivethBlock() {
    return (
        <div className={styles['fiveth-wrapper']}>
            <FullPage>
                <div className={styles.title}>Наши преимущества</div>
                <Padded className={styles.padded}>
                    <div className={styles.preferences}>
                        <div className={styles['preference-item']}>
                            <div className={styles['preference-text']}>
                                продажи
                            </div>
                            <div className={styles['preference-circle']} />
                            <Img src={firstIcon} />
                        </div>
                        <div className={styles['preference-item']}>
                            <div className={styles['preference-text']}>
                                аудит
                            </div>
                            <div className={styles['preference-circle']} />
                            <Img src={secondIcon} />
                        </div>
                        <div className={styles['preference-item']}>
                            <div className={styles['preference-text']}>
                                внедрение
                            </div>
                            <div className={styles['preference-circle']} />
                            <Img src={thirdIcon} />
                        </div>
                    </div>
                    <div className={styles['preferences-image']}>
                        <div className={styles['preference-text-wrapper']}>
                            <div className={styles['top-part']} />
                            <div className={styles['bottom-part']}>
                                <div className={styles.text}>
                                    коммерческий директор группы компаний
                                </div>
                            </div>
                            <div className={styles.text}>
                                Если бизнес партнера стал более ефективный - это
                                наивысшая оценка для нас
                            </div>
                            <div className={styles.subtext}>
                                Александр Баркат
                            </div>
                            <br />
                            <br />
                        </div>
                        <Img src={tower} />
                    </div>
                </Padded>
            </FullPage>
        </div>
    )
}

export default ProjectsFivethBlock
