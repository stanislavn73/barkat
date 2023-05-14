import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import DassaultLogo from '../../../../../public/images/Dassault.png'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const allPlanItems = [
    {
        id: 1,
        title: '3DEXPERIENCE',
        type: '3DExperience',
        text: 'Платформа для цифрового моделирования и работы с Big Data: системное проектирование, производчтво и бизнес-партнерство',
    },
    {
        id: 2,
        title: 'DraftSight',
        type: 'DraftSide',
        text: 'Программное обеспечение для создания чертежей и 3D-проектирования',
    },
    {
        id: 3,
        title: 'CATIA',
        type: 'Catia',
        text: 'Цифровое 3D-проектирование продуктов с учетом их поведения в реальных условиях',
    },
    {
        id: 4,
        title: 'ENOVIA',
        type: 'Enovia',
        text: 'Интеллектуальное бизнес-моделирование и планирование на предприятии',
    },
    {
        id: 5,
        title: 'DELMIA',
        type: 'Delmia',
        text: 'Решение для технологической подготовки производчтва в единой виртуальной среде',
    },
    {
        id: 7,
        title: 'SIMULIA',
        type: 'Simulia',
        text: 'Мультифизическое моделирование инженерных расчетов и виртуальное тестирование изделий',
    },
    {
        id: 8,
        title: 'Dassault: Нефтегазовая промышленность',
        type: 'DassaultOil',
        text: 'Dassault для индустрии Oil&Gas: эффективные буровые работы, анализ породы, освоение месторождений',
    },
    {
        id: 9,
        title: 'Dassault: Строительство',
        type: 'DassaultBuilding',
        text: 'Решения для гражданского и промышленного строительства: реализация архитектурного проекта здания от концепции до детального проектирования, совместная работа над проектом',
    },
    {
        id: 10,
        title: 'Dassault: Планирование производства',
        type: 'DassaultPlanning',
        text: 'DELMIA Ortems обеспечивает оптимизацию, планирование и составление графиков',
    },
    {
        id: 11,
        title: 'Dassault: Цифровой двойник производства',
        type: 'DassaultClone',
        text: 'Планирование технологических процессов, симуляция поведения оборудования и материальных потоков, виртуальная фабрика',
    },
]

class Dassault extends React.PureComponent {
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
                            Dassault Systèmes
                        </div>
                        <SocialMedia page='Dassault' />
                    </div>
                    <PlainText className={styles['soft-plain-text']}>
                        Dassault Systèmes - разработчик программного обеспечения
                        для 3D-проектирования и управления жизненным циклом
                        продукции (PLM), объединенного единой платформой
                        3DEXPERIENCE.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        3DEXPERIENCE – это цифровая среда для моделирования
                        предметов окружающего мира и связанных с ними ощущений,
                        которая обеспечивает эффективную работу производственных
                        процессов и позволяет увидеть жизненный цикл изделия от
                        этапа его создания до утилизации в виртуальной
                        реальности.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        Dassault Systèmes, штаб квартира которой расположена во
                        французском Велизи (пригород Парижа), является одним из
                        лидеров мирового рынка PLM и САПР, насчитывает 64 центра
                        разработок, представлена в 140 странах, обеспечивает
                        поддержку более 250 тыс. корпоративных клиентов в 11
                        промышленных отраслях.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        <a href='http://www.3ds.com'>http://www.3ds.com</a>
                    </PlainText>
                    <div className={styles['soft-items-wrapper']}>
                        {allPlanItems.map(item => (
                            <div key={item.id} className={styles['soft-item']}>
                                <Img
                                    className={styles['logo']}
                                    src={DassaultLogo}
                                />
                                <ModalConsumer>
                                    {({ handleOpenSoftModal }) => (
                                        <div
                                            className={styles['title']}
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
                                            className={styles['button']}
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

export default Dassault
