import HomePage from "../components/pages/HomePage";
import ProjectsPage from "../components/pages/ProjectsPage/ProjectsPage";
import FacadesPage from "../components/pages/FacadesPage/FacadesPage";
import SoftPage from "../components/pages/SoftPage";

import about from "../assets/images/pages/About_us_first.jpg";
import Eventpage from "../components/pages/EventPage/EventPage";
import BuySketchUp from "../components/pages/BuySoft/BuySketchUp";

export const PAGES = [
  {
    id: 1,
    name: "Главная",
    route: "/",
    page: HomePage,
    isMenu: false,
  },
  {
    id: 2,
    name: "О Компании",
    route: "/about_us",
    page: ProjectsPage,
    screenImg: about,
    screenTitle: "О Компании",
    isMenu: true,
  },
  {
    id: 4,
    name: 'Вентилируемые фасады\n Barkat-Stein',
    route: "/facades",
    page: FacadesPage,
    screenImg:
      "http://allfacades.com/wp-content/uploads/2014/10/ventiliruemye-fasady-iz-kompozita-800x500_c.jpg",
    screenTitle: "Вентилируемые фасады",
    isMenu: true,
  },
  {
    id: 5,
    name: "3D-Решения (BIM, PLM, GIS)\n Barkat-3d-ville",
    route: "/soft",
    page: SoftPage,
    screenImg: "https://exo.in.ua/images/news/2018/08/new-41279.jpg",
    screenTitle: "3D-Решения (BIM, PLM, GIS)",
    isMenu: true,
  },
  {
    id: 6,
    name: "Инженерные сети Barkat-Engineering",
    route: "/engineer-nets",
    page: HomePage,
    isMenu: false,
    disabled: true,
  },
  {
    id: 7,
    // eslint-disable-next-line react/react-in-jsx-scope
    name: <>Агро&nbsp;решения Barkat-AGROSPATIAL</>,
    route: "/agro-solutions",
    page: HomePage,
    isMenu: false,
    disabled: true,
  },
  {
    id: 8,
    name: "События",
    route: "/events",
    page: Eventpage,
    screenImg: "https://exo.in.ua/images/news/2018/08/new-41279.jpg",
    screenTitle: "События",
    // screenImg: about,
    isMenu: true
  },
  {
    id: 9,
    name: "ОплатаSketchUp",
    route: "/buy-sketchup",
    page: BuySketchUp,
    screenImg: "https://exo.in.ua/images/news/2018/08/new-41279.jpg",
    screenTitle: "BuySoft",
    // screenImg: about,
    isMenu: false
  }  
];
