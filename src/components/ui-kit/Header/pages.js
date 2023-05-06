import about from '../../../../public/images/pages/About_us_first.jpg'

import dynamic from 'next/dynamic'

const BuySketchUp = dynamic(() => import('../../pages/BuySoft/BuySketchUp'), {
    loading: () => <p>Loading...</p>,
})
const PaymentSuccess = dynamic(() => import('../../pages/PaymentSuccess'), {
    loading: () => <p>Loading...</p>,
})

const EventPage = dynamic(() => import('../../pages/EventPage/EventPage'), {
    loading: () => <p>Loading...</p>,
})

const ProjectsPage = dynamic(
    () => import('../../pages/ProjectsPage/ProjectsPage'),
    {
        loading: () => <p>Loading...</p>,
    }
)
const HomePage = dynamic(() => import('../../pages/HomePage'), {
    loading: () => <p>Loading...</p>,
})

const FacadesPage = dynamic(
    () => import('../../pages/FacadesPage/FacadesPage'),
    {
        loading: () => <p>Loading...</p>,
    }
)
const SoftPage = dynamic(() => import('../../pages/SoftPage'), {
    loading: () => <p>Loading...</p>,
})

export const PAGES = [
    {
        id: 1,
        name: 'Главная',
        route: '/',
        page: HomePage,
        isMenu: false,
    },
    {
        id: 2,
        name: 'О Компании',
        route: '/about_us',
        page: ProjectsPage,
        screenImg: about,
        screenTitle: 'О Компании',
        isMenu: true,
    },
    {
        id: 4,
        name: 'Вентилируемые фасады\n Barkat-Stein',
        route: '/facades',
        page: FacadesPage,
        screenImg:
            'http://allfacades.com/wp-content/uploads/2014/10/ventiliruemye-fasady-iz-kompozita-800x500_c.jpg',
        screenTitle: 'Вентилируемые фасады',
        isMenu: true,
    },
    {
        id: 5,
        name: '3D-Решения (BIM, PLM, GIS)\n Barkat-3d-ville',
        route: '/soft',
        page: SoftPage,
        screenImg: 'https://exo.in.ua/images/news/2018/08/new-41279.jpg',
        screenTitle: '3D-Решения (BIM, PLM, GIS)',
        isMenu: true,
    },
    // {
    //     id: 6,
    //     name: 'Инженерные сети Barkat-Engineering',
    //     route: '/engineer-nets',
    //     page: HomePage,
    //     isMenu: false,
    //     disabled: true,
    // },
    // {
    //     id: 7,
    //     name: <>Агро&nbsp;решения Barkat-AGROSPATIAL</>,
    //     route: '/agro-solutions',
    //     page: HomePage,
    //     isMenu: false,
    //     disabled: true,
    // },
    {
        id: 8,
        name: 'События',
        route: '/events',
        page: EventPage,
        screenImg: 'https://exo.in.ua/images/news/2018/08/new-41279.jpg',
        screenTitle: 'События',
        // screenImg: about,
        isMenu: true,
    },
    {
        id: 9,
        name: 'ОплатаSketchUp',
        route: '/buy-sketchup',
        page: BuySketchUp,
        screenImg: 'https://exo.in.ua/images/news/2018/08/new-41279.jpg',
        screenTitle: 'BuySoft',
        // screenImg: about,
        isMenu: false,
    },
    {
        id: 10,
        name: 'ОплатаУспешна',
        route: '/payment-success',
        page: PaymentSuccess,
        screenImg: 'https://exo.in.ua/images/news/2018/08/new-41279.jpg',
        screenTitle: 'BuySuccess',
        // screenImg: about,
        isMenu: false,
    },
]
