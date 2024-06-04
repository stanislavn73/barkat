import React from 'react'
import Padded from '../../../ui-kit/Padded'
import Title from '../../../ui-kit/Title'
import Img from '../../../ui-kit/Img'
import FullPage from '../../../ui-kit/FullPage'

import * as icon1 from '../../../../../public/images/pages/facades/3.png'
import * as icon2 from '../../../../../public/images/pages/facades/4.png'
import * as icon3 from '../../../../../public/images/pages/facades/5.png'
import * as icon4 from '../../../../../public/images/pages/facades/6.png'
import * as icon5 from '../../../../../public/images/pages/facades/7.png'
import * as icon6 from '../../../../../public/images/pages/facades/8.png'

import styles from './FourthBlock.module.scss'
import { useTranslation } from '../../../layouts/Layout'
import { get } from '../../../utils/facades/get'

const icons = [
    {
        icon: icon1,
        id: 'icon1',
        text: 'Подробная спецификация элементов',
    },
    {
        icon: icon2,
        id: 'icon2',
        text: 'Прочностной расчет',
    },
    {
        icon: icon3,
        id: 'icon3',
        text: 'Схемы раскладки облицовочного камня по всей площади фасада',
    },
    {
        icon: icon4,
        id: 'icon4',
        text: 'Выполнение чертежей узлов примыкания, технических решений',
    },
    {
        icon: icon5,
        id: 'icon5',
        text: 'Разработка монтажных схем на элементы системы с воздушным каналом и облицовочным камнем',
    },
    {
        icon: icon6,
        id: 'icon6',
        text: 'Разработка проекта КМД',
    },
]

function ProjectsFourthBlock({ id }) {
    const { t } = useTranslation('facades')
    return (
        <FullPage className={styles['facades-icons-block-wrapper']} min>
            <Padded className={styles['facades-fourth-padded']}>
                <Title className={styles.title}>{get(t, `${id}.title`)}</Title>
                <div className={styles['icons-wrapper-facades-four']}>
                    {icons.map((el, index) => (
                        <div className={styles['icons-block-item']} key={index}>
                            <Img
                                src={el.icon}
                                className={styles['icons-block-icon']}
                            />
                            <div className={styles['icons-block-text']}>
                                {get(t, `${id}.${el.id}`)}
                            </div>
                        </div>
                    ))}
                </div>
            </Padded>
        </FullPage>
    )
}

export default ProjectsFourthBlock
