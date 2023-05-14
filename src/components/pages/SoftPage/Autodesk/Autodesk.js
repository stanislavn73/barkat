import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import AutodeskLogo from '../../../../../public/images/Autodesk.jpg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const allPlanItems = [
    {
        id: 1,
        title: 'REVIT',
        type: 'REVIT',
        text: 'REVIT - эффективность и точность закрепления инженерного замысла в 3D',
    },
    {
        id: 2,
        type: 'AUTOCAD',
        title: 'AutoCAD',
        text: 'AutoCAD - программное обеспечение автоматизированного проектирования (САПР), с помощью которого архитекторы, инженеры и строители создают точные 2D- и 3D-чертежи.',
    },
    {
        id: 3,
        title: 'Autodesk AEC Collection',
        type: 'AUTODESK_AEC_COLLECTION',
        text: 'Autodesk AEC Collection – коллекция инструментов для проектирования и строительства промышленных и гражданских объектов, что включает в себя все необходимых инструменты BIM для проектирования зданий, объектов инфраструктуры и строительства.',
    },
    {
        id: 4,
        title: 'Autodesk Navisworks',
        type: 'NAVISWORKS',
        text: 'Autodesk Navisworks – представляет собой комплекс продуктов для проверки архитектурно-строительных проектов и управления ими.',
    },
    {
        id: 5,
        title: 'Autodesk Civil 3D',
        type: 'CIVIL_3D',
        text: 'Autodesk Civil 3D – решение для проектирования объектов инфраструктуры и выпуска документации, основанное на технологии информационного моделирования (BIM).',
    },
]

class Autodesk extends React.PureComponent {
    render() {
        return (
            <FullPage min className={styles['soft-block-wrapper']}>
                <Padded className={styles['soft-block-padded']}>
                    <div className={styles['title-container']}>
                        <div className={styles['soft-block-title']}>
                            Autodesk
                        </div>
                        <SocialMedia page='Autodesk' />
                    </div>

                    <PlainText className={styles['soft-plain-text']}>
                        Autodesk, Inc. – компания, крупнейший в мире поставщик
                        программного обеспечения в области 3D-проектирования и
                        BIM для промышленного и гражданского строительства,
                        машиностроения, рынка средств информации и развлечений.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        Компанией разработан широкий спектр программных
                        продуктов для архитекторов, инженеров, конструкторов,
                        самые популярные из которых: Revit, AutoCAD, AutoCAD LT,
                        Inventor Professional, AutoCAD Civil 3D, 3ds Max. Сейчас
                        насчитывается более 10 млн пользователей Autodesk по
                        всему миру, которые используют данное программное
                        обеспечение, чтобы сэкономить время и деньги, получить
                        конкурентные преимущества и изменить способ воплощения
                        идей в жизнь. Пользователи не просто видят модель на
                        экране, но и могут испытать ее. Благодаря этому
                        экономятся время и средства, повышается качество и
                        рождаются новаторские решения.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        <a href='https://www.autodesk.ru/'>www.autodesk.ru</a>
                    </PlainText>
                    <div className={styles['soft-items-wrapper']}>
                        {allPlanItems.map(item => (
                            <div key={item.id} className={styles['soft-item']}>
                                <Img
                                    className={styles['logo']}
                                    src={AutodeskLogo}
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

export default Autodesk
