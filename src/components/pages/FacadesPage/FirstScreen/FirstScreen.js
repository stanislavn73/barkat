import FullPage from '../../../ui-kit/FullPage/FullPage'
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle'
import { HeaderThumb } from '../../../ui-kit/Header'
import * as backgroundImage from '../../../../../public/images/pages/facades/1.jpg'
import { useTranslation } from '../../../layouts/Layout'

import styles from './FirstScreen.module.scss'
import { get } from '../../../utils/facades/get'

function ProjectsFirstScreen({ id }) {
    const { t } = useTranslation('facades')

    return (
        <FullPage className={styles['block-wrapper']}>
            <HeaderThumb />
            <PageImageTitle
                src={backgroundImage}
                title={t.screenTitle}
                subTitle={t.subTitle}
            />
            <div className={styles['bottom-line-facades']}>
                <div className={styles.padded}>
                    <div className={styles['thumb-content-wrapper']}>
                        <div className={styles['title-flag']}>
                            <div>{get(t, `${id}.title`)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </FullPage>
    )
}

export default ProjectsFirstScreen
