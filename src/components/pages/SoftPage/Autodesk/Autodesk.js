import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import Padded from '../../../ui-kit/Padded/Padded';
import PlainText from '../../../ui-kit/PlainText';
import Img from '../../../ui-kit/Img';
import { ModalConsumer } from '../../../layouts/Layout';
import './Autodesk.less';

import AutodeskLogo from '../../../../assets/images/Autodesk.jpg';
import SocialMedia from './SocialMedia';

const allPlanItems = [
    {
        id: 1,
        title: 'REVIT',
        type: 'REVIT',
        text: 'REVIT - эффективность и точность закрепления инженерного замысла в 3D'
    },
    {
        id: 2,
        type: 'AUTOCAD',
        title: 'AutoCAD',
        text: 'AutoCAD - программное обеспечение автоматизированного проектирования (САПР), с помощью которого архитекторы, инженеры и строители создают точные 2D- и 3D-чертежи.'
    },
    {
        id: 3,
        title: 'Autodesk AEC Collection',
        type: 'AUTODESK_AEC_COLLECTION',
        text: 'Autodesk AEC Collection – коллекция инструментов для проектирования и строительства промышленных и гражданских объектов, что включает в себя все необходимых инструменты BIM для проектирования зданий, объектов инфраструктуры и строительства.'
    },
    {
        id: 4,
        title: 'Autodesk Navisworks',
        type: 'NAVISWORKS',
        text: 'Autodesk Navisworks – представляет собой комплекс продуктов для проверки архитектурно-строительных проектов и управления ими.'
    },
    {
        id: 5,
        title: 'Autodesk Civil 3D',
        type: 'CIVIL_3D',
        text: 'Autodesk Civil 3D – решение для проектирования объектов инфраструктуры и выпуска документации, основанное на технологии информационного моделирования (BIM).'
    }
];

class Autodesk extends React.PureComponent {
    render() {
        return (
            <FullPage min ref={this.block} className='soft-block-wrapper'>
                <Padded className='soft-block-padded'>
                    <div className='title-container' >
                    <div className='soft-block-title'>Autodesk</div>
                    <SocialMedia />
                    </div>
                    
                    <PlainText className='soft-plain-text'>
                        Autodesk, Inc. – компания, крупнейший в мире поставщик программного обеспечения
                        в области 3D-проектирования и BIM для промышленного и гражданского строительства,
                        машиностроения, рынка средств информации и развлечений.
                    </PlainText>
                    <PlainText className='soft-plain-text'>
                        Компанией разработан широкий спектр программных продуктов для архитекторов, инженеров,
                        конструкторов, самые популярные из которых: Revit, AutoCAD, AutoCAD LT, Inventor
                        Professional, AutoCAD Civil 3D, 3ds Max. Сейчас насчитывается более 10 млн пользователей
                        Autodesk по всему миру, которые используют данное программное обеспечение, чтобы сэкономить
                        время и деньги, получить конкурентные преимущества и изменить способ воплощения идей в
                        жизнь. Пользователи не просто видят модель на экране, но и могут испытать ее. Благодаря
                        этому экономятся время и средства, повышается качество и рождаются новаторские решения.
                    </PlainText>
                    <PlainText className='soft-plain-text'>
                        <a href="https://www.autodesk.ru/">www.autodesk.ru</a>
                    </PlainText>
                    <div className='soft-items-wrapper'>
                        {allPlanItems.map((item) => (
                            <div key={item.id} className='soft-item'>
                                <Img className='logo' src={AutodeskLogo} />
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

export default Autodesk;
