import React from 'react';
import FullPage from '../../../ui-kit/FullPage';
import Padded from '../../../ui-kit/Padded';
import PlainText from '../../../ui-kit/PlainText';
import Title from '../../../ui-kit/Title';
import Img from '../../../ui-kit/Img';
import * as imageBlock from '../../../../assets/images/pages/facades/2.png';
import './ThirdScreen.less';


function ProjectsThirdScreen() {
    return (
        <FullPage min className='third-screen-wrapper-facades'>
            <Padded className='facades-padded'>
                <Title className='title'>
                    Все преимущества
                </Title>
                <div className='text-block'>
                    <PlainText className='text'>
                        Значительное сокращение затрат на отопление здания
                    </PlainText>
                    <PlainText className='text'>
                        Долговечность: срок безремонтной эксплуатации систем навесных вентилируемых фасадов — до 50 лет
                    </PlainText>
                    <PlainText className='text'>
                        Устойчивость фасадной системы к атмосферным воздействиям
                    </PlainText>
                    <PlainText className='text'>
                        Быстрый монтаж фасадной системы в любое время года
                    </PlainText>
                    <PlainText className='text'>
                        Применение навесного фасада снимает проблему перегрева стен в летние месяцы
                    </PlainText>
                    <PlainText className='text'>
                        Ремонтопригодность в случае частичного повреждения
                    </PlainText>
                    <PlainText className='text'>
                        Возможность использования различных облицовочных материалов
                    </PlainText>
                    <PlainText className='text'>
                        Широкая возможность цветовых  комбинаций (карта цветов) RAL
                        </PlainText>
                    <PlainText className='text'>
                        Высокие тепло- и звукоизоляционные характеристики системы.
                            </PlainText>
                    <PlainText className='text'>
                        Благодаря слою утепления, «точка конденсации» выносится за пределы несущей стены здания
                    </PlainText>
                </div>
            </Padded>
            <div className='round-circle'>
                <Img src={imageBlock} className='image' />
                <div className='circle' />
            </div>
        </FullPage >
    );
}

export default ProjectsThirdScreen;
