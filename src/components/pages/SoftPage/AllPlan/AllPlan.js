import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import allPlanLogo from '../../../../../public/images/AllPlan.jpg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const allPlanItems = [
    {
        id: 1,
        title: 'Allplan Architecture',
        type: 'AllPlanArchitecture',
        text: 'Allplan Architecture - комплексное BIM решение для создания и выдачи детализированных чертежей, проектной документации и визуализации.',
    },
    {
        id: 2,
        title: 'PLANBAR',
        type: 'PLANBAR',
        text: 'САПР решение, специально разработанное для производства сборного железобетона разной сложности',
    },
    {
        id: 3,
        title: 'Allplan Engineering Building',
        type: 'AllplanEngineeringBuilding',
        text: 'Allplan Engineering Building - BIM решение для быстрого и эффективного моделирования и армирования строительных конструкций.',
    },
    {
        id: 4,
        title: 'Allplan Linear',
        type: 'AllplanLinear',
        text: 'Allplan Linear - высокопроизводительный инструмент для быстрого создания 2D и 3D моделей, профессионального оформления рабочих чертежей.',
    },
]

class AllPlan extends React.PureComponent {
    render() {
        return (
            <FullPage
                min
                ref={this.block}
                className={styles['soft-block-wrapper']}
            >
                <Padded className={styles['soft-block-padded']}>
                    <div className={styles['title-container']}>
                        <div className={styles['soft-block-title']}>
                            AllPlan
                        </div>
                        <SocialMedia page='AllPlan' />
                    </div>
                    <PlainText className={styles['soft-plain-text']}>
                        На протяжении более 50 лет ALLPLAN является лидером в
                        автоматизации проектирования в строительной отрасли,
                        последние 25 лет внедряет технологию BIM. Более 240
                        тысяч пользователей по всему миру используют ALLPLAN для
                        создания современных сооружений, среди которых много
                        объектов известных своей уникальной архитектурой и
                        сложными инженерными решениями.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        <a href='https://www.allplan.com/en/'>
                            www.allplan.com
                        </a>
                    </PlainText>
                    <div className={styles['soft-items-wrapper']}>
                        {allPlanItems.map(item => (
                            <div key={item.id} className={styles['soft-item']}>
                                <Img
                                    className={styles.logo}
                                    src={allPlanLogo}
                                />
                                <ModalConsumer>
                                    {({ handleOpenSoftModal }) => (
                                        <div
                                            className={styles.title}
                                            onClick={handleOpenSoftModal(
                                                item.type
                                            )}
                                        >
                                            {item.title}
                                        </div>
                                    )}
                                </ModalConsumer>
                                <PlainText className={styles['item-text']}>
                                    {item.text}
                                </PlainText>
                                <ModalConsumer>
                                    {({ handleOpenForm }) => (
                                        <div
                                            className={styles.button}
                                            onClick={handleOpenForm}
                                        >
                                            Написать нам
                                        </div>
                                    )}
                                </ModalConsumer>
                            </div>
                        ))}
                    </div>
                </Padded>
            </FullPage>
        )
    }
}

export default AllPlan
