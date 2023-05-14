import ImageSlides from '../../../ui-kit/ImageSlides'
import FullPage from '../../../ui-kit/FullPage'
import Title from '../../../ui-kit/Title'
import SubTitle from '../../../ui-kit/SubTitle'
import Padded from '../../../ui-kit/Padded'
import OpenModalButton from '../../../ui-kit/OpenModalButton'
import FullscreenImg from '../../../ui-kit/FullscreenImg'
import DownloadCatalog from '../../../ui-kit/DownloadCatalog'
import facadesTerracotaSlides from '../../../utils/facades/terracota'
import terracota_first_type from '../../../../../public/images/facades/terracota/types/01.jpg'
import terracota_second_type from '../../../../../public/images/facades/terracota/types/02.jpg'
import system from '../../../../../public/images/facades/terracota/system/system.jpg'

import catalog from '../../../../../public/images/facades/terracota/catalog.pdf'
import catalog_color from '../../../../../public/images/facades/terracota/catalog_color.pdf'

import styles from './Terracota.module.scss'
import { FacadesWrapper } from '../FacadesWrapper'

export default function Terracota() {
    return (
        <FacadesWrapper className={styles['terracota-block']}>
            <FullPage>
                <Title>Фасад ТЕРРАКОТОВЫЕ ПАНЕЛИ</Title>
                <ImageSlides data={facadesTerracotaSlides} />
            </FullPage>
            <Padded>
                <SubTitle>
                    ТЕРРАКОТОВЫЕ ПАНЕЛИ как строительный материал
                </SubTitle>
                <p>
                    Идеальное решение: навесные вентилируемые фасады из
                    терракотовых керамических панелей.
                </p>
                <p>
                    Эстетика, экономичность и устойчивость окружающей среды: на
                    сочетании этих трех факторов основывается растущая
                    популярность навесных вентилируемых фасадов из «терракоты».
                    Плиты и фасонные элементы современной расцветки придают
                    зданию запоминающийся вид и помогают архитектору воплотить
                    свои идеи. Благодаря богатому разнообразию цветов, форматов
                    и структур поверхности системы навесных вентилируемых
                    фасадов от Barkat-Stein обеспечивают идеальную основу для
                    свободы творчества при планировании новых или реконструкции
                    старых зданий. Клиенты с особыми запросами также смогут
                    найти то, что требуется, поскольку одной из сильных сторон
                    компании является производство по индивидуальному заказу.
                </p>
                <p>
                    Уже более 2000 лет керамика является «исходным материалом
                    для архитекторов». Цветная плитка и керамические украшения в
                    строительстве использовали еще этруски. Понятие «керамика»
                    включает в себя все неорганические неметаллические
                    материалы, которые сначала формуются, а затем обжигаются.
                </p>
                <p>
                    Основным компонентом массы для керамической плитки является
                    глина, сформировавшаяся в результате эрозии из содержащих
                    полевой шпат пород (таких как гранит) под воздействием
                    ветра, воды и сезонных перепадов температуры. Глина состоит
                    из мелкозернистых минералов, причем глинистые минералы
                    (слоистые силикаты) придают глине ее пластические свойства.
                    Ввиду особых требований к процессу производства керамики, а
                    также к самой продукции в глину (50-70 %) необходимо
                    домешать прочее сырье: например, полевой шпат (15-25 %),
                    шамот (10-20 %) и каолин (0-10 %). Обработка включает в себя
                    гомогенное смешивание всех компонентов. Полученную массу
                    дальше обрабатывают в рамках процесса производства керамики.
                    При формовании плитки в основном различают два метода: с
                    одной стороны, применяется сухое прессование, с другой, –
                    экструдирование. В процессе формования подготовленная масса
                    в виде гранулята или в пластифицированном состоянии
                    продавливается в форму или сквозь форму под очень высоким
                    давлением. Выбор соответствующего метода формования зависит
                    от требуемых свойств конечного продукта. Barkat-Stein
                    поставляет терракотовую керамику, произведенную обоими
                    методами.
                </p>
                <SubTitle>
                    Цветовая гамма ТЕРРАКОТОВЫХ ПАНЕЛЕЙ, каталог
                </SubTitle>
                <div className={styles['terracota-images-wrapper']}>
                    <div className={styles['terracota-image-item']}>
                        <FullscreenImg src={terracota_first_type} />
                    </div>
                    <div className={styles['terracota-download-item']}>
                        <DownloadCatalog
                            file={catalog}
                            name='Каталог Керамогранит'
                        />
                    </div>
                </div>
                <div className={styles['terracota-images-wrapper']}>
                    <div className={styles['terracota-image-item']}>
                        <FullscreenImg src={terracota_second_type} />
                    </div>
                    <div className={styles['terracota-download-item']}>
                        <DownloadCatalog
                            file={catalog_color}
                            name='Цветовая линейка Керамогранит'
                            title='Детальнее по цветовой гамме'
                        />
                    </div>
                </div>
                <SubTitle>
                    Металлическая подсистема навесного вентилируемого фасада под
                    облицовку терракотовыми панелями, установленных на
                    универсальные кляммеры из нержавеющей стали
                </SubTitle>
                <div
                    className={`${styles['terracota-system-wrapper']} ${styles['facades-system-wrapper']}`}
                >
                    <div className={styles['terracota-system']}>
                        <FullscreenImg src={system} />
                        <OpenModalButton />
                    </div>
                    <div>
                        <p>
                            <SubTitle>Конструкция:</SubTitle>
                            <p>
                                • Плиты облицовки устанавливаются на
                                универсальные кляммеры рядами{' '}
                            </p>
                            <p>
                                • Кляммеры крепятся непосредственно к несущему
                                профилю подсистемы заклепками из нержавеющей
                                стали{' '}
                            </p>
                            <p>
                                • Допускается применение следующих типовых
                                подсистем: рядовая, межэтажная{' '}
                            </p>
                        </p>
                        <p>
                            <SubTitle>Преимущества:</SubTitle>
                            <p>
                                • Минимальная номенклатура крепежа — один
                                универсальный кляммер обеспечивает множество
                                решений{' '}
                            </p>
                            <p>
                                • Возможно как горизонтальное, так и
                                вертикальное крепление плит облицовки{' '}
                            </p>
                            <p>
                                • Универсальное крепление для плит различных
                                производителей{' '}
                            </p>
                            <p>• Быстрый монтаж и демонтаж плит </p>
                            <p>
                                • Универсальное решение для рядовой и межэтажной
                                подсистемы{' '}
                            </p>
                        </p>
                    </div>
                </div>
            </Padded>
        </FacadesWrapper>
    )
}
