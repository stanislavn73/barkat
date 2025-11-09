import React from 'react'
import FullPage from '../../../ui-kit/FullPage'
import Padded from '../../../ui-kit/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Bold from '../../../ui-kit/Bold'
import Img from '../../../ui-kit/Img'
import { useTranslation } from '../../../layouts/Layout'
import * as imageBlock from '../../../../../public/images/pages/About_us_third.jpg'
import styles from './ThirdScreen.module.scss'

function ProjectsThirdScreen() {
    const { t } = useTranslation('projects')

    return (
        <div className={styles['third-screen-wrapper']}>
            <FullPage className={styles['third-fullpage-projects']}>
                <Padded>
                    <div className={styles['text-block']}>
                        <div className={styles.text}>
                            <PlainText>
                                {t.companyInfo.intro}
                            </PlainText>
                            <PlainText>
                                - {t.companyInfo.barkatStein}
                            </PlainText>
                            <PlainText>
                                - {t.companyInfo.barkat3DVille}
                            </PlainText>
                            <PlainText>
                                - {t.companyInfo.barkatEngineering}
                            </PlainText>
                            <PlainText>
                                - {t.companyInfo.barkatAgrospatial}
                            </PlainText>
                        </div>
                    </div>
                </Padded>
                <div className={styles['image-block']}>
                    <Img
                        className={styles['image-block-image']}
                        src={imageBlock}
                    />
                    <div className={styles['image-block-title']}>
                        {t.companyInfo.imageTitle}
                    </div>
                </div>
                <div className={styles['back-title']}>{t.companyInfo.backTitle}</div>
            </FullPage>
        </div>
    )
}

export default ProjectsThirdScreen
