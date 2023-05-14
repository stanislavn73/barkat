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

const icons = [
    {
        icon: icon1,
        text: 'Подробная спецификация элементов',
    },
    {
        icon: icon2,
        text: 'Прочностной расчет',
    },
    {
        icon: icon3,
        text: 'Схемы раскладки облицовочного камня по всей площади фасада',
    },
    {
        icon: icon4,
        text: 'Выполнение чертежей узлов примыкания, технических решений',
    },
    {
        icon: icon5,
        text: 'Разработка монтажных схем на элементы системы с воздушным каналом и облицовочным камнем',
    },
    {
        icon: icon6,
        text: 'Разработка проекта КМД',
    },
]

function ProjectsFourthBlock() {
    return (
        <FullPage className={styles['facades-icons-block-wrapper']} min>
            <Padded className={styles['facades-fourth-padded']}>
                <Title className={styles.title}>Разработка</Title>
                <div className={styles['icons-wrapper-facades-four']}>
                    {icons.map((el, index) => (
                        <div className={styles['icons-block-item']} key={index}>
                            <Img
                                src={el.icon}
                                className={styles['icons-block-icon']}
                            />
                            <div className={styles['icons-block-text']}>
                                {el.text}
                            </div>
                        </div>
                    ))}
                </div>
            </Padded>
        </FullPage>
    )
}

export default ProjectsFourthBlock
