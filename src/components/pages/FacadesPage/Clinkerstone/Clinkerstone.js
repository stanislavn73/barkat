import React from 'react'
import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesClinkerstoneSlides from '../../../utils/facades/clinkerstone'
import coral_star from '../../../../../public/images/facades/clinkerstone/types/Coral_star.jpg'
import marrakesh_dust from '../../../../../public/images/facades/clinkerstone/types/Marrakesh_dust.jpg'
import silver_rose from '../../../../../public/images/facades/clinkerstone/types/Silver_rose.jpg'
import snow_brick from '../../../../../public/images/facades/clinkerstone/types/Snow_brick.jpg'
import argon_wall from '../../../../../public/images/facades/clinkerstone/types/Argon_wall.jpg'
import dry_system from '../../../../../public/images/facades/clinkerstone/system/dry-system.jpg'
import wet_system from '../../../../../public/images/facades/clinkerstone/system/wet-system.jpg'

import catalog from '../../../../../public/images/facades/clinkerstone/catalog.pdf'

import styles from './Clinkerstone.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'

export default function Clinkerstone() {
    return (
        <FacadesWrapper className={styles['facades-sixth-block']}>
            <FullPage>
                <Title>Фасад КЛИНКЕРСТОУН</Title>
                <ImageSlides data={facadesClinkerstoneSlides} />
            </FullPage>
            <Padded>
                <SubTitle>КЛИНКЕРСТОУН как строительный материал</SubTitle>
                <p>
                    Клинкерстоун – камень под кирпич или «дикий» камень –
                    нестареющая классика – материал, позволяющий воплотить в
                    жизнь «полет фантазии» каждого архитектора. Конструктивно
                    заданные горизонтальные и вертикальные швы клинкера дарят
                    фасаду богатый четко очерченный рисунок идеальной кирпичной
                    кладки. Широта оттенков и фактур камня, а также возможность
                    использования объемных декоративных элементов (карнизов,
                    колонн, балюстрад и других) позволяют реализовать
                    архитектурные идеи любой сложности.
                </p>
                <p>
                    Клинкерстоун – вариант керамического камня, изготовление
                    которого производится по не совсем привычной схеме, а
                    именно: во-первых, большую часть материала получают
                    экструзионным методом, во-вторых, при обжиге клинкер минует
                    фазу витрификации. В итоге готовый продукт имеет хоть и
                    гладкую, но не глянцевую поверхность и сохраняет сходство с
                    клинкерным кирпичом. Поскольку в сырье не добавляются
                    химические красители, тон камня зависит от минерального
                    состава глины. Терракотовые оттенки получаются благодаря
                    примеси железа. Черные, серые, серо-голубые цвета дает
                    углерод. Камни выпускаются с неровными сколами,
                    закругленными краями, прямоугольные. Могут имитировать
                    кирпич, старые стены, «дикий» камень и т.д. Так как габариты
                    плитки намного меньше, чем кирпича – за счет толщины,
                    плотность изделия должна быть выше, чтобы достигнуть
                    необходимой прочности. Добиваются этого за счет прессования
                    под высоким давлением и более высокой температуры обжига –
                    1100–1450 ˚С против 800–1000 ˚С. Клинкерстоун –
                    низкопористый материал, имеет высокую водостойкость и
                    морозостойкость; очень плохо впитывает влагу – не более
                    2–3%, а, значит, не становится жертвой ее замерзания в
                    порах. Цветовая гамма изделий приближена к естественной,
                    однако это не исключает любых экзотических оттенков. Причем
                    красящие пигменты добавляют в исходное сырье, так что
                    солнечные лучи никак не воздействуют на облицовку. Для
                    фасадной облицовки выпускают не только рядовую плитку, но и
                    доборные элементы для оформления угла. Очень часто эти
                    материалы комбинируют по цвету, желая придать зданию более
                    интересный вид. Как и полагается керамической плитке,
                    клинкер нечувствителен к бактериям, грибкам, плесени и
                    совершенно пожаробезопасен.
                </p>
                <SubTitle>Цветовая гамма и виды камня, каталог</SubTitle>
                <div className={styles['clinkerstone-images-wrapper']}>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={coral_star} />
                        <div className={styles['clinkerstone-image-title']}>
                            Кораловая звезда
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={marrakesh_dust} />
                        <div className={styles['clinkerstone-image-title']}>
                            Пыль Марракеша
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={silver_rose} />
                        <div className={styles['clinkerstone-image-title']}>
                            Серебряная роза
                        </div>
                    </div>
                </div>
                <div className={styles['clinkerstone-images-wrapper']}>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={snow_brick} />
                        <div className={styles['clinkerstone-image-title']}>
                            Зимний кирпич
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <FullscreenImg src={argon_wall} />
                        <div className={styles['clinkerstone-image-title']}>
                            Аргон настенный
                        </div>
                    </div>
                    <div className={styles['clinkerstone-image-item']}>
                        <DownloadCatalog
                            file={catalog}
                            name='Каталог Клинкерстоун'
                        />
                    </div>
                </div>
                <SubTitle>
                    Металлическая подсистема навесного вентилируемого фасада под
                    облицовку клинкерным камнем, установлеваемая на кляммерных
                    планках с применением затирочных смесей
                </SubTitle>
                <div
                    className={`${styles['clinkerstone-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <FullscreenImg
                        src={dry_system}
                        className={styles['clinkerstone-system']}
                    />
                    <div>
                        <p>
                            <SubTitle>Конструкция:</SubTitle>
                            <p>
                                • Клинкерный камень монтируется между
                                горизонтально установленными стартовыми и/или
                                рядовыми профилями из нержавеющей стали{' '}
                            </p>
                            <p>
                                • Швы между плитками герметизируются при помощи
                                затирочной смеси. Горизонтальный шов на
                                терморазрыве заполняется силиконовым герметиком
                                в цвет затирки{' '}
                            </p>
                            <p>
                                • Для удерживания затирочных смесей в
                                вертикальном шве применена стальная
                                перфорированная лента{' '}
                            </p>
                        </p>
                        <p>
                            <SubTitle>Преимущества:</SubTitle>
                            <p>
                                • Перфорация в рядовом профиле удерживает
                                затирку – нет необходимости устанавливать
                                дополнительную перфоленту в горизонтальном шве{' '}
                            </p>
                            <p>
                                • Заклепочное крепление в верхней части рядового
                                и стартового профиля – удобный монтаж и снижение
                                нагрузки на заклепку{' '}
                            </p>
                            <p>• Визуальная имитация кирпичной кладки </p>
                            <p>
                                • Универсальное решение для рядовой и межэтажной
                                подсистемы{' '}
                            </p>
                            <p>• Широкий выбор вида камня толщиной от 14 мм </p>
                        </p>
                    </div>
                </div>
                <SubTitle>
                    Металлическая подсистема навесного вентилируемого фасада под
                    облицовку клинкерным камнем, установлеваемая на кляммерных
                    планках сухим методом
                </SubTitle>
                <div
                    className={`${styles['clinkerstone-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['clinkerstone-system']}>
                        <FullscreenImg src={wet_system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <p>
                            <SubTitle>Конструкция:</SubTitle>
                            <p>
                                • Клинкерный камень монтируется беззатирочным
                                методом между горизонтально расположенными
                                стартовыми и/или рядовыми профилями из
                                нержавеющей стали{' '}
                            </p>
                            <p>
                                • Крепление клинкерных профилей к несущим
                                осуществляется при помощи заклепок из
                                нержавеющей стали{' '}
                            </p>
                            <p>
                                • Конструкция рядового профиля предусматривает
                                пружинный зажим для верхнего гребня плитки{' '}
                            </p>
                        </p>
                        <p>
                            <SubTitle>Преимущества:</SubTitle>
                            <p>
                                • Монтаж в любое время года независимо от
                                условий окружающей среды{' '}
                            </p>
                            <p>
                                • Заклепочное крепление в верхней части
                                кляммерной планки – удобный монтаж и снижение
                                нагрузки на заклепку{' '}
                            </p>
                            <p>
                                • Локальная ремонтопригодность – каждая
                                отдельная плитка может быть оперативно извлечена
                                или заменена{' '}
                            </p>
                        </p>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
