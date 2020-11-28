import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import Padded from '../../../ui-kit/Padded/Padded';
import PlainText from '../../../ui-kit/PlainText';
import Img from '../../../ui-kit/Img';
import { ModalConsumer } from '../../../layouts/Layout';
import './AllPlan.less';

import allPlanLogo from '../../../../assets/images/AllPlan.jpg';
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia';

const allPlanItems = [
    {
        id: 1,
        title: 'Allplan Architecture',
        type: 'AllPlanArchitecture',
        text: 'Allplan Architecture - комплексное BIM решение для создания и выдачи детализированных чертежей, проектной документации и визуализации.'
    }, {
        id: 2,
        title: 'PLANBAR',
        type: 'PLANBAR',
        text: 'САПР решение, специально разработанное для производства сборного железобетона разной сложности'
    }, {
        id: 3,
        title: 'Allplan Engineering Building',
        type: 'AllplanEngineeringBuilding',
        text: 'Allplan Engineering Building - BIM решение для быстрого и эффективного моделирования и армирования строительных конструкций.'
    }, {
        id: 4,
        title: 'Allplan Linear',
        type: 'AllplanLinear',
        text: 'Allplan Linear - высокопроизводительный инструмент для быстрого создания 2D и 3D моделей, профессионального оформления рабочих чертежей.'
    }
];



class AllPlan extends React.PureComponent {
    render() {
        return (
            <FullPage min ref={this.block} className='soft-block-wrapper'>
                <Padded className='soft-block-padded'>
                    <div className='title-container' >
                        <div className='soft-block-title'>AllPlan</div>
                        <SocialMedia page='AllPlan' />

                    </div>
                    <PlainText className='soft-plain-text'>
                        На протяжении более 50 лет ALLPLAN является лидером в автоматизации проектирования в
                        строительной отрасли, последние 25 лет внедряет технологию BIM.  Более 240 тысяч
                        пользователей по всему миру используют ALLPLAN для создания современных сооружений,
                        среди которых много объектов известных своей уникальной архитектурой и сложными
                        инженерными решениями.
                        </PlainText>
                    <PlainText className='soft-plain-text'>
                        <a href="https://www.allplan.com/en/">www.allplan.com</a>
                    </PlainText>
                    <div className='soft-items-wrapper'>
                        {allPlanItems.map((item) => (
                            <div key={item.id} className='soft-item'>
                                <Img className='logo' src={allPlanLogo} />
                                <ModalConsumer>
                                    {({ handleOpenSoftModal }) => (
                                        <div className='title' onClick={handleOpenSoftModal(item.type)}>
                                            {item.title}
                                        </div>)}
                                </ModalConsumer>
                                <PlainText className='item-text'>
                                    {item.text}
                                </PlainText>
                                <ModalConsumer>
                                    {({ handleOpenForm }) => <div className='button' onClick={handleOpenForm}>Написать нам</div>}
                                </ModalConsumer>
                            </div>
                        ))}
                    </div>
                </Padded>
            </FullPage>
        );
    }
}

export default AllPlan;
