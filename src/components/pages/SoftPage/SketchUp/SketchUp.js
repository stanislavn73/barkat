import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import Padded from '../../../ui-kit/Padded/Padded';
import IconsBlock from '../../../ui-kit/IconsBlock';
import PlainText from '../../../ui-kit/PlainText';
import Img from '../../../ui-kit/Img';
import { ModalConsumer } from '../../../layouts/Layout';
import './SketchUp.less';

import achievements from '../../../../utils/achievements';
import * as sketchupTitleLogo from '../../../../assets/images/SketchUp.jpg';
import * as backgroundImage from '../../../../assets/images/pages/facades/2back.jpg';
import * as sketchupLogo from '../../../../assets/images/pages/soft/sketchup-logo1.svg';
import * as dowloadIcon from '../../../../assets/images/pages/soft/download.png';
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia';

const sketchupItems = [
    {
        id: 1,
        title: 'SketchUp Pro',
        type: 'SketchUpPro',
        text: 'Профессиональное 3D-моделирование простых объектов'
    },{
        id: 5,
        title: 'SketchUp Studio',
        type: 'SketchUpStudio',
        text: 'Пакет инструментов для профессионального 3D-моделирования, в который входят продукты: SketchUpPro, SketchUp для web, Trimble Connect, Sefaira'
    },{
        id: 4,
        title: 'Trimble Connect',
        type: 'TrimbleConnect',
        text: 'Платформа, которая обеспечивает взаимодействие между участниками строительного проекта и программными инструментами.'
    },
    {
        id: 2,
        title: 'Extension Warehouse',
        type: 'ExtensionWarehouse',
        text: 'Библиотека пользовательских сторонних расширений'
    },
    {
        id: 3,
        title: 'SketchUp for Web',
        type: 'SketchUpForInternet',
        text: 'профессиональный инструмент моделирования в веб-браузере'
    }
];

const sketchupDownloadItems = [
    {
        id: 1,
        text: '3D Warehouse - крупнейшая в мире и самая популярная 3D библиотека'
    },
    {
        id: 2,
        text: 'Extension Warehouse - библиотека расширений для моделирования'
    },
    {
        id: 3,
        text: 'Подписка SketchUp Pro. Инструменты, возможности'
    }
];

class SketchUp extends React.PureComponent {
    render() {
        return (
            <FullPage min ref={this.block} className='soft-block-wrapper'>
                <Padded className='soft-block-padded'>
                <div className='title-container' >
                    <div className='soft-block-title'>SketchUp</div>
                    <SocialMedia page='SketchUp' />
                    </div>
                    <PlainText className='soft-plain-text'>
                        Trimble более 40 лет создает уникальные решения, которые помогают клиентам
                        развивать свой бизнес. Имея более 2000 уникальных патентов, а также центры
                        исследований и разработок в более чем 15 странах, Trimble дополняет разработку
                        своих продуктов стратегическими приобретениями, чтобы вывести новейшие технологии
                        на более широкий рынок. В портфеле компании передовые решения для эффективной
                        трансформации таких отраслей, как сельское хозяйство, строительство,
                        геопространство, транспорт и логистика. Все, что нужно архитектору и дизайнеру
                        для визуализации идей и удобного черчения, создания энергетически эффективных
                        зданий и уникальных интерьеров есть в продуктах SketchUp и насчитывает сотни
                        профессиональных расширений и уникальных инструментов.
                        </PlainText>
                    <PlainText className='soft-plain-text'>
                        <a href="https://www.sketchup.com/">www.sketchup.com</a>
                    </PlainText>
                    <div className='soft-items-wrapper'>
                        {sketchupItems.map((item) => (
                            <div key={item.id} className='soft-item'>
                                <Img className='logo' src={sketchupLogo} />
                                <ModalConsumer>
                                    {({handleOpenSoftModal}) => (
                                    <div className='title' onClick={handleOpenSoftModal(item.type)}>
                                        {item.title}
                                    </div>)}
                                </ModalConsumer>
                                <PlainText className='item-text'>
                                    {item.text}
                                </PlainText>
                                <ModalConsumer>
                                    {({handleOpenForm}) => <div className='button' onClick={handleOpenForm}>Написать нам</div>}
                                </ModalConsumer>
                            </div>
                        ))}
                    </div>
                </Padded>
            </FullPage>
        );
    }
}

export default SketchUp;
