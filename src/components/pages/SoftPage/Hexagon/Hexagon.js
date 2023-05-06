import FullPage from '../../../ui-kit/FullPage/FullPage'
import Padded from '../../../ui-kit/Padded/Padded'
import PlainText from '../../../ui-kit/PlainText'
import Img from '../../../ui-kit/Img'
import { ModalConsumer } from '../../../layouts/Layout'
import styles from '../SoftPage.module.scss'

import HexagonLogo from '../../../../../public/images/Hexagon.jpg'
import SocialMedia from '../../../ui-kit/SocialMedia/SocialMedia'

const allPlanItems = [
    {
        id: 1,
        title: 'GeoMedia',
        type: 'GeoMedia',
        text: 'GeoMedia – это современная ГИС-платформа, построенная на общемировых отраслевых стандартах',
    },
    {
        id: 2,
        title: 'ERDAS IMAGINE',
        type: 'ErdasImagine',
        text: 'ERDAS IMAGINE – это удобное в использовании программное обеспечение, специально предназначенное для извлечения информации из растровых изображений.',
    },
    {
        id: 3,
        title: 'ImageStation',
        type: 'ImagineStation',
        text: 'ImageStation - программное обеспечения для организации рабочих процессов цифровой фотограмметрии, включая создание проектов, ориентацию и автоматическую триангуляцию из аэрофотоснимков и спутниковых изображений.',
    },
    {
        id: 4,
        title: 'ERDAS APOLLO',
        type: 'ErdasApollo',
        text: 'ERDAS APOLLO - это универсальная система управления геоданными и бизнес-данными, их анализа и доставки в централизованную библиотеку данных с распределением  из облака.',
    },
    {
        id: 5,
        title: 'M.App Enterprise',
        type: 'MAppEnterprise',
        text: 'M.App Enterprise - это локальная платформа для создания геопространственных приложений для вашей организации. Она хранит ваши изображения, векторные и облачные данные, рабочие процессы, аналитику и запросы, доступные в одном месте с простым пользовательским интерфейсом.',
    },
    {
        id: 6,
        title: 'Luciad',
        type: 'Luciad',
        text: 'Luciad - Портфель Luciad предлагает геопространственные программные решения, которые упрощают жизнь разработчиков и конечных пользователей благодаря расширенной визуальной аналитике, которая позволяет им раскрыть потенциал анализа местоположения в реальном времени и создать основу для геопространственных систем следующего поколения 5D. ',
    },
    {
        id: 7,
        title: 'Цифровой Генплан',
        type: 'GenPlan',
        text: 'Решение для создания цифрового генплана и ГИС-систем предприятий',
    },
]

const Hexagon = () => {
    return (
        <FullPage min className={styles['soft-block-wrapper']}>
            <Padded className={styles['soft-block-padded']}>
                <div className={styles['title-container']}>
                    <div className={styles['soft-block-title']}>Hexagon</div>
                    <SocialMedia page='Hexagon' />
                </div>
                <PlainText className={styles['soft-plain-text']}>
                    Hexagon является мировым лидером в области сенсорных,
                    программных и автономных решений.
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    Технологии Hexagon формируют городские и производственные
                    экосистемы, которые становятся все более связанными и
                    автономными, обеспечивая масштабируемое и прогнозируемое
                    будущее. Такие решения уже имеют спрос для организации
                    крупных массивов данных в легко-читаемые визуальные
                    представления.
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    Hexagon Geospatial занимается разработкой
                    геопространственных решений и специализированных приложений
                    для сбора, анализа и визуализации данных о
                    месторасположении, которые позволяют добиваться большей
                    эффективности, производительности и качества в таких
                    отраслях как общественная безопасность, государственное и
                    муниципальное управление, транспорт, фотограмметрия,
                    инженерные коммуникации, телекоммуникации.
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    Подразделение Hexagon Geospatial создает решения, которые
                    визуализируют информацию о местоположении и обеспечивают
                    интеллектуальную цифровую реальность 5D с пониманием того,
                    что было, что есть, что может быть, что должно быть, и в
                    конечном итоге, что будет.
                </PlainText>
                <PlainText className={styles['soft-plain-text']}>
                    <a href='http://www.hexagongeospatial.com'>
                        www.hexagongeospatial.com
                    </a>
                </PlainText>
                <div className={styles['soft-items-wrapper']}>
                    {allPlanItems.map(item => (
                        <div key={item.id} className={styles['soft-item']}>
                            <Img className={styles['logo']} src={HexagonLogo} />
                            <ModalConsumer>
                                {({ handleOpenSoftModal }) => (
                                    <div
                                        className={styles['title']}
                                        onClick={handleOpenSoftModal(item.type)}
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

export default Hexagon
