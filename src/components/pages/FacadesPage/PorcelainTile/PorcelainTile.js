import React from 'react'
import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesPorcelianTileSlides from '../../../utils/facades/porcelianTile'
import porcelian_tile_colors from '../../../../../public/images/facades/porcelian-tile/types/01.pdf'
import porcelian_tile_type from '../../../../../public/images/facades/porcelian-tile/types/02.jpg'
import system from '../../../../../public/images/facades/porcelian-tile/system/system.jpg'

import catalog from '../../../../../public/images/facades/porcelian-tile/catalog.pdf'

import styles from './PorcelainTile.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'

export default function PorcelainTile() {
    return (
        <FacadesWrapper className={styles['porcelian-tile-block']}>
            <FullPage>
                <Title>Фасад КЕРАМОГРАНИТ</Title>
                <ImageSlides data={facadesPorcelianTileSlides} />
            </FullPage>
            <Padded>
                <SubTitle>КЕРАМОГРАНИТ как строительный материал</SubTitle>
                <p>
                    Оптимальное решение: навесные вентилируемые фасады из
                    керамогранита, главное преимущество которого заключается в
                    идеальном соотношении качества и стоимости. Затраты на
                    материал себя полностью окупают, так как данный вид отделки
                    вентилируемого фасада обладает рядом достоинств перед
                    альтернативными конструкциями: такая облицовка в течение
                    десятилетий сохраняется в первоначальном виде, не изменяет
                    своего оттенка, не требует дополнительных расходов на
                    содержание, остается чрезвычайно устойчивой к воздействию
                    окружающей среды; сохраняет влагостойкость, морозостойкость,
                    прочность и экономичность. При этом отделка из керамогранита
                    предоставляет широкий простор для воображения многих
                    архитекторов и дизайнеров.
                </p>
                <SubTitle>Цветовая гамма КЕРАМОГРАНИТ, каталог</SubTitle>
                <div className={styles['porcelian-tile-images-wrapper']}>
                    <div className={styles['porcelian-tile-image-item']}>
                        <FullscreenImg src={porcelian_tile_type} />
                    </div>
                    <div className={styles['porcelian-tile-download-item']}>
                        <DownloadCatalog
                            file={porcelian_tile_colors}
                            name='Цветовая линейка Керамогранит'
                            title='Детальнее по цветовой гамме'
                        />
                        <DownloadCatalog
                            file={catalog}
                            name='Каталог Керамогранит'
                        />
                    </div>
                </div>
                <SubTitle>
                    Металлическая подсистема навесного вентилируемого фасада под
                    облицовку керамогранитом, установленного в кляммерах из
                    нержавеющей стали видимым способом
                </SubTitle>
                <div
                    className={`${styles['porcelian-tile-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['porcelian-tile-system']}>
                        <FullscreenImg src={system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <div>
                            <SubTitle>Конструкция:</SubTitle>
                            <p>
                                • Линейка, состоящая из стартовых, угловых и
                                рядовых кляммеров позволяет крепить к
                                направляющим профилям плиты облицовки форматом
                                до 1200х600 мм, толщиной от 8 до 12 мм с
                                выраженным рустом 8 мм{' '}
                            </p>
                            <p>
                                • Крепление кляммеров к направляющим профилям
                                осуществляется при помощи заклепок из
                                нержавеющей стали{' '}
                            </p>
                            <p>
                                • Допускается применение следующих типовых
                                подсистем: рядовая, межэтажная{' '}
                            </p>
                        </div>
                        <div>
                            <SubTitle>Преимущества:</SubTitle>
                            <p>
                                • Универсальное портфолио профилей и
                                соединителей системы позволяет решать
                                разнообразные архитектурные задачи{' '}
                            </p>
                            <p>
                                • Система гарантирует надежность подсистемы при
                                расстояниях от стены до облицовки от 97 до 458
                                мм{' '}
                            </p>
                            <p>
                                • Направляющая в виде т-профиля позволяет
                                добиться отсутствия заклёпок на его лицевой
                                части, что исключает сложности при монтаже
                                облицовки{' '}
                            </p>
                            <p>
                                • При шахматной раскладке облицовки или для
                                дополнительной жесткости предусмотрено
                                формирование вертикально-горизонтальной или
                                горизонтально-вертикальной подсистемы{' '}
                            </p>
                            <p>
                                • Низкий коэффициент теплового расширения
                                элементов подсистемы снижает риск деформации и
                                повреждения облицовки вследствие сезонных
                                перепадов температуры{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
