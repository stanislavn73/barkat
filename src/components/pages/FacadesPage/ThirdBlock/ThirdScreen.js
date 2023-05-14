import React from 'react'
import FullPage from '../../../ui-kit/FullPage'
import Padded from '../../../ui-kit/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Title from '../../../ui-kit/Title'
import Img from '../../../ui-kit/Img'
import * as imageBlock from '../../../../../public/images/pages/facades/2.png'
import styles from './ThirdScreen.module.scss'

function ProjectsThirdScreen() {
    return (
        <FullPage min className={styles['third-screen-wrapper-facades']}>
            <Padded className={styles['facades-padded']}>
                <Title className={styles.title}>Все преимущества</Title>
                <div className={styles['text-block']}>
                    <PlainText className={styles.text}>
                        Значительное сокращение затрат на отопление здания
                    </PlainText>
                    <PlainText className={styles.text}>
                        Долговечность: срок безремонтной эксплуатации систем
                        навесных вентилируемых фасадов — до 50 лет
                    </PlainText>
                    <PlainText className={styles.text}>
                        Устойчивость фасадной системы к атмосферным воздействиям
                    </PlainText>
                    <PlainText className={styles.text}>
                        Быстрый монтаж фасадной системы в любое время года
                    </PlainText>
                    <PlainText className={styles.text}>
                        Применение навесного фасада снимает проблему перегрева
                        стен в летние месяцы
                    </PlainText>
                    <PlainText className={styles.text}>
                        Ремонтопригодность в случае частичного повреждения
                    </PlainText>
                    <PlainText className={styles.text}>
                        Возможность использования различных облицовочных
                        материалов
                    </PlainText>
                    <PlainText className={styles.text}>
                        Широкая возможность цветовых комбинаций (карта цветов)
                        RAL
                    </PlainText>
                    <PlainText className={styles.text}>
                        Высокие тепло- и звукоизоляционные характеристики
                        системы.
                    </PlainText>
                    <PlainText className={styles.text}>
                        Благодаря слою утепления, «точка конденсации» выносится
                        за пределы несущей стены здания
                    </PlainText>
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
