import React from 'react'
import FullPage from '../../../ui-kit/FullPage'
import Padded from '../../../ui-kit/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Title from '../../../ui-kit/Title'
import Img from '../../../ui-kit/Img'
import * as imageBlock from '../../../../../public/images/pages/facades/2.png'
import styles from './ThirdScreen.module.scss'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

function ProjectsThirdScreen({ id }) {
    const { t } = useTranslation('facades')

    return (
        <FullPage min className={styles['third-screen-wrapper-facades']}>
            <Padded className={styles['facades-padded']}>
                <Title className={styles.title}>{get(t, `${id}.title`)}</Title>
                <div className={styles['text-block']}>
                    {get(t, `${id}.textArray`).map(item => (
                        <PlainText className={styles.text}>{item}</PlainText>
                    ))}
                </div>
            </Padded>
            <div className={styles['round-circle']}>
                <Img src={imageBlock} className={styles.image} />
                <div className={styles.circle} />
            </div>
        </FullPage>
    )
}

export default ProjectsThirdScreen
