import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesMarbleSlides from '../../../utils/facades/marble'
import skin_marble from '../../../../../public/images/facades/marble/types/skin_marble.jpg'
import gray_marble from '../../../../../public/images/facades/marble/types/gray_marble.jpg'
import gray_marble_blurred from '../../../../../public/images/facades/marble/types/gray_marble_blurred.jpg'
import dolomite from '../../../../../public/images/facades/marble/types/dolomite.jpg'
import traverteen from '../../../../../public/images/facades/marble/types/traverteen.jpg'
import system from '../../../../../public/images/facades/marble/system/marble-system.jpg'

import catalog from '../../../../../public/images/facades/marble/catalog.pdf'

import styles from './MarbleBlock.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'

export default function MarbleBlock() {
    return (
        <FacadesWrapper className={styles['facades-sixth-block']}>
            <FullPage>
                <Title>Фасад МРАМОР / ДОЛОМИТ / ТРАВЕРТИН</Title>
                <ImageSlides data={facadesMarbleSlides} styles={styles} />
            </FullPage>
            <Padded>
                <SubTitle>Юрский мрамор как строительный материал</SubTitle>
                <p>
                    В последние годы фасадные панели из натурального мрамора
                    стали одними из наших самых востребованных продуктов.
                    Вентилируемый фасад из мрамора способен качественно
                    преобразить любой объект как коммерческого, так и
                    гражданского строительства. Исторически мрамор юрского
                    периода добывался и использовался в качестве строительного
                    материала еще со времен Римской империи. Долгую историю
                    успеха натурального камня демонстрируют сегодня остатки
                    стен, башен и бань, которые до сих пор можно найти во многих
                    уголках Европы. Различные находки из недавнего прошлого,
                    такие как Römertherme или Römerkastell в Вайсенбурге, ясно
                    показывают это.
                </p>
                <SubTitle>Цветовая гамма и виды камня, каталог</SubTitle>
                <SubTitle>Юрский мрамор:</SubTitle>
                <div className={styles['marble-images-wrapper']}>
                    <div className={styles['marble-image-item']}>
                        <FullscreenImg src={skin_marble} />
                        <div className={styles['marble-image-title']}>
                            Мрамор бежевый, пескоструйный
                        </div>
                    </div>
                    <div className={styles['marble-image-item']}>
                        <FullscreenImg src={gray_marble} />
                        <div className={styles['marble-image-title']}>
                            Мрамор серый, пескоструйная обработка
                        </div>
                    </div>
                    <div className={styles['marble-image-item']}>
                        <FullscreenImg src={gray_marble_blurred} />
                        <div className={styles['marble-image-title']}>
                            Мрамор серый, матовый
                        </div>
                    </div>
                </div>
                <div className={styles['mable-horizontal-wrapper']}>
                    <div>
                        <SubTitle>Дитфуртский доломит:</SubTitle>
                        <div className={styles['marble-images-wrapper']}>
                            <div className={styles['marble-image-item']}>
                                <FullscreenImg src={dolomite} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <SubTitle>Дитфуртский травертин:</SubTitle>
                        <div className={styles['marble-images-wrapper']}>
                            <div className={styles['marble-image-item']}>
                                <FullscreenImg src={traverteen} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles['marble-image-item']}>
                            <DownloadCatalog
                                className={styles['marble-download-catalog']}
                                file={catalog}
                                name='Каталог Мрамор / Доломит / Травертин'
                            />
                        </div>
                    </div>
                </div>
                <SubTitle>
                    Металлическая подсистема навесного вентилируемого фасада под
                    облицовку мраморными плитами с пропилом, устанавливаемая
                    скрытым способом на кляммерных планках
                </SubTitle>
                <div
                    className={`${styles['marble-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['marble-system']}>
                        <FullscreenImg src={system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <div>
                            <SubTitle>Конструкция:</SubTitle>
                            <p>
                                • Мраморные облицовочные плиты с пропилом
                                крепятся к подсистеме при помощи кляммерных
                                планок
                            </p>
                            <p>
                                • Крепление кляммерных планок к несущим профилям
                                осуществляется при помощи алюминиевых заклепок
                            </p>
                            <p>
                                • Несущие профили крепятся с помощью кронштейнов
                                либо к плоскости стены (для рядовой подсистемы)
                                либо к плитам перекрытия (для межэтажной
                                подсистемы){' '}
                            </p>
                        </div>
                        <div>
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
