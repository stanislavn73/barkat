import Padded from '../../../ui-kit/Padded/Padded'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import allPlanLogo from '../../../../../public/images/AllPlan.jpg'
import { ModalConsumer } from '../../../layouts/Layout'
import FullPage from '../../../ui-kit/FullPage'
import React from 'react'

const teamViewerItems = [
    {
        id: 1,
        title: 'TeamViewer Frontline xPick',
        type: 'xPick',
        text: 'Решение используется для автоматизированного сбора и упаковки товаров на складах и производственных линиях. Она использует передовые технологии компьютерного зрения и машинного обучения, чтобы распознавать товары и пакеты в режиме реального времени и уменьшать время сбора и ошибки. Frontline xPick помогает компаниям оптимизировать процессы и повышать эффективность работы склада',
    },
    {
        id: 2,
        title: 'TeamViewer Frontline xMake',
        type: 'xMake',
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
const TeamViewer = () => {
    return (
        <FullPage min className='soft-block-wrapper'>
            <Padded className='soft-block-padded'>
                <div className='title-container'>
                    <div className='soft-block-title'>TeamViewer</div>
                    {/*<SocialMedia page='AllPlan' />*/}
                </div>
                <PlainText className='soft-plain-text'>
                    Team Viewer Frontline разработан для помощи людям,
                    работающих руками, и концентрируется на предоставлении
                    возможности специалисту работать в цифровой среде. Frontline
                    предоставляет возможность сосредоточиться на реальных
                    задачах, а не на сложном программном обеспечении.
                </PlainText>
                <PlainText className='soft-plain-text'>
                    <a href='https://www.teamviewer.com/'>teamviewer.com</a>
                </PlainText>
                <div className='soft-items-wrapper'>
                    {teamViewerItems.map(item => (
                        <div key={item.id} className='soft-item'>
                            <Img className='logo' src={allPlanLogo} />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className='title'
                                        onClick={handleOpenSoftModal(item.type)}
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </ModalConsumer>
                            <PlainText className='item-text'>
                                {item.text}
                            </PlainText>
                            <ModalConsumer>
                                {({ handleOpenForm }) => (
                                    <div
                                        className='button'
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

export default TeamViewer
