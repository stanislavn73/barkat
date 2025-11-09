import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle'
import { HeaderThumb } from '../../../ui-kit/Header'
import { useTranslation } from '../../../layouts/Layout'
import * as backgroundImage from '../../../../../public/images/pages/About_us_first.jpg'
import styles from './FirstScreen.module.scss'

function ProjectsFirstScreen() {
    const { t } = useTranslation('projects')

    return (
        <FullPage>
            <HeaderThumb />
            <PageImageTitle
                src={backgroundImage}
                title={t.ourProjects}
                useMobileImage
                subTitle={t.firstScreen.subtitle}
            />
            <div className={styles['black-bottom-line']}>
                <div className={styles.padded}>
                    <div className={styles['thumb-content-wrapper']}>
                        <div>asd</div>
                        <div className={styles['title-flag']}>
                            <div>{t.firstScreen.aboutUs}</div>
                        </div>
                    </div>
                </div>
            </div>
        </FullPage>
    )
}

export default ProjectsFirstScreen
