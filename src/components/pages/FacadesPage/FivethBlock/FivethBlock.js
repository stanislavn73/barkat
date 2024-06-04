import FullPage from '../../../ui-kit/FullPage'
import Padded from '../../../ui-kit/Padded'
import Img from '../../../ui-kit/Img'
import PlainText from '../../../ui-kit/PlainText'
import Title from '../../../ui-kit/Title'
import * as back from '../../../../../public/images/pages/facades-5.jpg'
import styles from './FivethBlock.module.scss'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

function ProjectsFivethBlock({ id }) {
    const { t } = useTranslation('facades')
    return (
        <div className={styles['facades-fiveth-wrapper']}>
            <FullPage min className={styles['full-page']}>
                <Img src={back} className={styles.back} />
                <Padded className={styles['content-wrapper']}>
                    <div className={styles.title}>{get(t, `${id}.title`)}</div>
                    <PlainText className={styles.text}>
                        {get(t, `${id}.textArray`)}
                    </PlainText>
                    <div className={styles['bottom-title-wrapper']}>
                        <Title className={styles['bottom-title']}>
                            {get(t, `${id}.title`)}
                        </Title>
                    </div>
                </Padded>
            </FullPage>
        </div>
    )
}

export default ProjectsFivethBlock
