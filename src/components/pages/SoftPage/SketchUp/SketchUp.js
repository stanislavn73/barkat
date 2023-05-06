import React from 'react'
import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import * as sketchupLogo from '../../../../../public/images/pages/soft/sketchup-logo1.svg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'
import Link from 'next/link'

const sketchupItems = [
    {
        id: 3,
        title: 'SketchUp Free',
        type: 'SketchUpForInternet',
        text: 'профессиональный инструмент моделирования в веб-браузере',
        buyIt: true,
    },
    {
        id: 6,
        title: 'SketchUp Shop',
        type: 'SketchUpShop',
        text: 'Программное обеспечение для самостоятельного 3D-моделирования, которое делает проектирование таким же увлекательным, как и строительство',
        buyIt: true,
    },
    {
        id: 1,
        title: 'SketchUp Pro',
        type: 'SketchUpPro',
        text: 'Профессиональное 3D-моделирование простых объектов',
        buyIt: true,
    },
    {
        id: 5,
        title: 'SketchUp Studio',
        type: 'SketchUpStudio',
        text: 'Пакет инструментов для профессионального 3D-моделирования, в который входят продукты: SketchUpPro, SketchUp для web, Trimble Connect, V-RAY и Scan Essentials',
        buyIt: true,
    },
    {
        id: 7,
        title: 'SketchUp для высшего образования',
        type: 'SketchUpEducation',
        text: 'Все, что нужно для выполнения проекта',
        buyIt: true,
    },
    {
        id: 4,
        title: 'Trimble Connect',
        type: 'TrimbleConnect',
        text: 'Платформа, которая обеспечивает взаимодействие между участниками строительного проекта и программными инструментами.',
        buyIt: false,
    },
    {
        id: 2,
        title: 'Extension Warehouse',
        type: 'ExtensionWarehouse',
        text: 'Библиотека пользовательских сторонних расширений',
        buyIt: false,
    },
]

class SketchUp extends React.PureComponent {
    render() {
        return (
            <FullPage min className={styles['soft-block-wrapper']}>
                <Padded className={styles['soft-block-padded']}>
                    <div className={styles['title-container']}>
                        <div className={styles['soft-block-title']}>
                            SketchUp
                        </div>
                        <SocialMedia page='SketchUp' />
                    </div>
                    <PlainText className={styles['soft-plain-text']}>
                        Trimble более 40 лет создает уникальные решения, которые
                        помогают клиентам развивать свой бизнес. Имея более 2000
                        уникальных патентов, а также центры исследований и
                        разработок в более чем 15 странах, Trimble дополняет
                        разработку своих продуктов стратегическими
                        приобретениями, чтобы вывести новейшие технологии на
                        более широкий рынок. В портфеле компании передовые
                        решения для эффективной трансформации таких отраслей,
                        как сельское хозяйство, строительство, геопространство,
                        транспорт и логистика. Все, что нужно архитектору и
                        дизайнеру для визуализации идей и удобного черчения,
                        создания энергетически эффективных зданий и уникальных
                        интерьеров есть в продуктах SketchUp и насчитывает сотни
                        профессиональных расширений и уникальных инструментов.
                    </PlainText>
                    <PlainText className={styles['soft-plain-text']}>
                        <a href='https://www.sketchup.com/'>www.sketchup.com</a>
                    </PlainText>
                    <div className={styles['soft-items-wrapper']}>
                        {sketchupItems.map(item => (
                            <div key={item.id} className={styles['soft-item']}>
                                <Img
                                    className={styles['logo']}
                                    src={sketchupLogo}
                                />
                                <ModalConsumer>
                                    {({ handleOpenSoftModal }) => (
                                        <div
                                            className={`${
                                                item.title.includes('SketchUp')
                                                    ? styles['title_SketchUp']
                                                    : styles.title
                                            }`}
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
                                <div className={styles['button-container']}>
                                    {item.buyIt && (
                                        <Link
                                            key='910'
                                            href='/buy-sketchup'
                                            className={styles.buyIt}
                                        >
                                            <div className={`${styles.button}`}>
                                                Купить
                                            </div>
                                        </Link>
                                    )}
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
                            </div>
                        ))}
                    </div>
                </Padded>
            </FullPage>
        )
    }
}

export default SketchUp
