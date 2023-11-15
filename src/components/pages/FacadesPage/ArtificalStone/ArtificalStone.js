import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesArtificalStoneSlides from '../../../utils/facades/artificalStone'
import artifical_stone_type from '../../../../../public/images/facades/artifical-stone/types/01.jpg'
import system from '../../../../../public/images/facades/artifical-stone/system/system.jpg'
import cx from 'classnames'

import catalog from '../../../../../public/images/facades/artifical-stone/catalog.pdf'

import styles from './ArtificalStone.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'

export default function ArtificalStone() {
    return (
        <FacadesWrapper className={styles['artifical-stone-block']}>
            <FullPage>
                <Title>Фасад ИСКУССТВЕННЫЙ КАМЕНЬ</Title>
                <ImageSlides data={facadesArtificalStoneSlides} />
            </FullPage>
            <Padded>
                <SubTitle>
                    ИСКУССТВЕННЫЙ КАМЕНЬ как строительный материал
                </SubTitle>
                <p>
                    Оптимальное и одно из самых бюджетных решений: навесные
                    вентфасады с икусственного камня.
                </p>
                <p>
                    Базовым материалом фасадного камня является цемент с
                    добавлением гранитной крошки, что обеспечивает ему прочность
                    и долговечность. Широкий выбор цветов и удобная система
                    монтажа предоставляют безграничные возможности для создания
                    внешнего вида дома. Благодаря особой форме элементов, данный
                    вид вентфасада имитирует кирпичную кладку, позволяет
                    выполнить оформление архитектурных деталей фасада дома, а
                    также полностью совместим с другими фасадными материалами.
                </p>
                <SubTitle>Цветовая гамма ИСКУСВЕННОГО КАМНЯ</SubTitle>
                <div className={styles['artifical-stone-images-wrapper']}>
                    <div className={styles['artifical-stone-image-item']}>
                        <FullscreenImg src={artifical_stone_type} />
                    </div>
                    <div className={styles['artifical-stone-download-item']}>
                        <DownloadCatalog
                            file={catalog}
                            name='Каталог Искусственный камень'
                        />
                    </div>
                </div>
                <SubTitle>
                    Металлическая подсистема навесного вентилируемого фасада под
                    облицовку терракотовыми панелями, установленных на
                    универсальные кляммеры из нержавеющей стали
                </SubTitle>
                <div
                    className={cx(
                        styles['artifical-stone-system-wrapper'],
                        styles['facades-system-wrapper']
                    )}
                >
                    <div className={styles['artifical-stone-system']}>
                        <FullscreenImg src={system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <div>
                            <SubTitle>Конструкция:</SubTitle>
                            <p>
                                • Искуственный камень монтируется беззатирочным
                                методом между горизонтально расположенными
                                стартовыми и/или рядовыми профилями из
                                нержавеющей стали{' '}
                            </p>
                            <p>
                                • Крепление вертикальных профилей к несущим
                                осуществляется при помощи заклепок из
                                нержавеющей стали{' '}
                            </p>
                            <p>
                                • Конструкция рядового профиля предусматривает
                                пружинный зажим для верхнего гребня камня{' '}
                            </p>
                        </div>
                        <div>
                            <SubTitle>Преимущества:</SubTitle>
                            <p>
                                • Монтаж в любое время года независимо от
                                условий окружающей среды{' '}
                            </p>
                            <p>
                                • Заклепочное крепление в верхней части рядового
                                и стартового профиля – удобный монтаж и снижение
                                нагрузки на заклепку{' '}
                            </p>
                            <p>
                                • Локальная ремонтопригодность – каждая
                                отдельная плитка может быть оперативно извлечена
                                или заменена{' '}
                            </p>
                            <p>
                                • Пружинный зажим верхней части камня в рядовом
                                профиле гасит вибрации и повышает надёжность
                                крепления{' '}
                            </p>
                            <p>
                                • Фиксирующий язычок в рядовом профиле
                                препятствует выдуванию облицовки в районах с
                                повышенной ветровой нагрузкой, а также
                                затрудняет несанкционированный демонтаж{' '}
                            </p>
                            <p>
                                • Применение фирменных шаблонов увеличивает
                                скорость и повышает точность монтажа рядового
                                профиля{' '}
                            </p>
                            <p>
                                • Универсальное решение для рядовой и межэтажной
                                подсистемы
                            </p>
                        </div>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
