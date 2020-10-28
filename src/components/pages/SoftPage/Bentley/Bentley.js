import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import Padded from '../../../ui-kit/Padded/Padded';
import PlainText from '../../../ui-kit/PlainText';
import Img from '../../../ui-kit/Img';
import { ModalConsumer } from '../../../layouts/Layout';
import './Bentley.less';

import BentleyLogo from '../../../../assets/images/Bentley.jpg';

const allPlanItems = [
    {
        id: 1,
        title: 'MicroStation',
        type: 'MicroStation',
        text: 'Решение для проектирования инфраструктуры и работы с проектной документацией'
    },
    {
        id: 2,
        title: 'PLAXIS',
        type: 'Plaxis',
        text: 'Сгстема для конечно-элеметного анализа в геотехнических проектах'
    },
    {
        id: 3,
        title: 'STAAD',
        type: 'Staad',
        text: 'Решение для 3D анализа и проектирования строительных конструкций'
    },
    {
        id: 4,
        title: 'ContextCapture',
        type: 'ContextCapture',
        text: 'Решение для быстрой разработкаи 3D-моделей при проектировании или в ходе эксплуатации из обычных фотографий'
    },
    {
        id: 5,
        title: 'SYNCHRO',
        type: 'SYNCHRO',
        text: 'Сильный инструмент для 4D планирования процесса строительства и контроля производства работ'
    },{
        id: 6,
        title: 'ProStructures',
        type: 'ProStructures',
        text: 'Создание точных 3D моделей строительных сооружений из стали, металла и железобетонных конструкций'
    }
];

class Bentley extends React.PureComponent {
    render() {
        return (
            <FullPage min ref={this.block} className='soft-block-wrapper'>
                <Padded className='soft-block-padded'>
                    <div className='soft-block-title'>Bentley</div>
                    <PlainText className='soft-plain-text'>
                        Bentley Systems - это компания-разработчик программного обеспечения на основе технологии
                        BIM для профессионалов в сфере строительства и управления мировой инфраструктурой, включая
                        автомобильные дороги, мосты, аэропорты, небоскребы, заводы и электростанции, а также сети.
                    </PlainText>
                    <PlainText className='soft-plain-text'>
                        Bentley предоставляет решения для полного жизненного цикла объектов инфраструктуры  c учетом
                        потребностей различных специалистов – инженеров, архитекторов, планировщиков, подрядчиков,
                        IT менеджеров, операторов и инженеров техобслуживания.
                    </PlainText>
                    <PlainText className='soft-plain-text'>
                        Каждое решение, состоящее из интегрированных приложений и сервисов, построенных на открытой
                        платформе, разработано для оперативного обмена информацией между различными рабочими
                        процессами и членами проектной команды, обеспечивая совместимость решений и
                        сотрудничество инженеров в группе.
                    </PlainText>
                    <PlainText className='soft-plain-text'>
                        Штат Bentley Systems превышает 3500 сотрудников, а годовой доход составляет более 700 млн.
                        долларов в 170 странах. С 2014 года Bentley инвестировала более 1 млрд. долларов в
                        исследования, разработки и поглощения.
                    </PlainText>
                    <PlainText className='soft-plain-text'>
                        <a href="http://www.bentley.com">www.bentley.com</a>
                    </PlainText>
                    <div className='soft-items-wrapper'>
                        {allPlanItems.map((item) => (
                            <div key={item.id} className='soft-item'>
                                <Img className='logo' src={BentleyLogo} />
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

export default Bentley;
