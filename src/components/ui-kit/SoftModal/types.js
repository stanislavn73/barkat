import Revit from './content/Revit'
import AutoCAD from './content/AutoCAD'
import AutodeskAecCollection from './content/AutodeskAecCollection'
import Navisworks from './content/Navisworks'
import Civil3D from './content/Civil3D'
import ThreeDExperience from './content/3DExperience'
import DraftSide from './content/DraftSide'
import Simulia from './content/Simulia'
import Delmia from './content/Delmia'
import Enovia from './content/Enovia'
import Catia from './content/Catia'
import GeoMedia from './content/GeoMedia'
import ErdasImagine from './content/ErdasImagine'
import ImagineStation from './content/ImagineStation'
import ErdasApollo from './content/ErdasApollo'
import MAppEnterprise from './content/MAppEnterprise'
import Luciad from './content/Luciad'
import MicroStation from './content/MicroStation'
import Plaxis from './content/Plaxis'
import Staad from './content/Staad'
import SketchUpPro from './content/SketchUpPro'
import ExtensionWarehouse from './content/ExtensionWarehouse'
import SketchUpForInternet from './content/SketchUpForInternet'
import AllPlanArchitecture from './content/AllPlanArchitecture'
import ContextCapture from './content/ContextCapture'
import SYNCHRO from './content/SYNCHRO'
import ProStructures from './content/ProStructures'
import PLANBAR from './content/PLANBAR'
import AllplanEngineeringBuilding from './content/AllplanEngineeringBuilding'
import AllplanLinear from './content/AllplanLinear'
import TrimbleConnect from './content/TrimbleConnect'
import DassaultOil from './content/DassaultOil'
import DassaultBuilding from './content/DassaultBuilding'
import DassaultPlanning from './content/DassaultPlanning'
import DassaultClone from './content/DassaultClone'
import GenPlan from './content/GenPlan'
import SketchUpStudio from './content/SketchUpStudio'
import PrivacyPolicy from './content/PrivacyPolicy'
import SketchUpShop from './content/SketchUpShop'
import SketchUpEducation from './content/SketchUpEducation'
import BuySketchUpShop from './content/BuyButtons/BuySketchUpShop'
import BuySketchUpPro from './content/BuyButtons/BuySketchUpPro'
import BuySketchUpStudio from './content/BuyButtons/BuySketchUpStudio'
import BuySketchUpHigher from './content/BuyButtons/BuySketchUpHigher'
import UserAgreement from './content/UserAgreement'
import { TeamViewerXPick } from './content/TeamViewer'

export default {
    REVIT: {
        title: 'Autodesk Revit',
        content: Revit,
    },
    AUTOCAD: {
        title: 'AutoCAD',
        content: AutoCAD,
    },
    AUTODESK_AEC_COLLECTION: {
        title: 'Autodesk AEC Collection',
        content: AutodeskAecCollection,
    },
    NAVISWORKS: {
        title: 'Autodesk Navisworks',
        content: Navisworks,
    },
    CIVIL_3D: {
        title: 'Autodesk Civil 3D',
        content: Civil3D,
    },
    '3DExperience': {
        title: '3DExperience',
        content: ThreeDExperience,
    },
    DraftSide: {
        title: 'DraftSide',
        content: DraftSide,
    },
    Catia: {
        title: 'Catia',
        content: Catia,
    },
    Enovia: {
        title: 'Enovia',
        content: Enovia,
    },
    Delmia: {
        title: 'Delmia',
        content: Delmia,
    },
    Simulia: {
        title: 'Simulia',
        content: Simulia,
    },
    DassaultOil: {
        title: 'Dassault: Нефтегазовая промышленность',
        content: DassaultOil,
    },
    DassaultBuilding: {
        title: 'Dassault: Строительство',
        content: DassaultBuilding,
    },
    DassaultPlanning: {
        title: 'Dassault: Планирование производства',
        content: DassaultPlanning,
    },
    DassaultClone: {
        title: 'Dassault: Цифровой двойник производства',
        content: DassaultClone,
    },
    GeoMedia: {
        title: 'GeoMedia',
        content: GeoMedia,
    },
    ErdasImagine: {
        title: 'Erdas Imagine',
        content: ErdasImagine,
    },
    ImagineStation: {
        title: 'Imagine Station',
        content: ImagineStation,
    },
    ErdasApollo: {
        title: 'Erdas Apollo',
        content: ErdasApollo,
    },
    MAppEnterprise: {
        title: 'M.App Enterprise',
        content: MAppEnterprise,
    },
    Luciad: {
        title: 'Luciad',
        content: Luciad,
    },
    GenPlan: {
        title: 'Цифровой Генплан',
        content: GenPlan,
    },
    MicroStation: {
        title: 'MicroStation',
        content: MicroStation,
    },
    Plaxis: {
        title: 'PLAXIS',
        content: Plaxis,
    },
    Staad: {
        title: 'STAAD',
        content: Staad,
    },
    ContextCapture: {
        title: 'ContextCapture',
        content: ContextCapture,
    },
    SYNCHRO: {
        title: 'SYNCHRO',
        content: SYNCHRO,
    },
    ProStructures: {
        title: 'ProStructures',
        content: ProStructures,
    },
    SketchUpPro: {
        title: 'SketchUp Pro',
        content: SketchUpPro,
    },
    SketchUpShop: {
        title: 'SketchUp Shop',
        content: SketchUpShop,
    },
    SketchUpEducation: {
        title: 'SketchUp для высшего образования',
        content: SketchUpEducation,
    },
    SketchUpStudio: {
        title: 'SketchUp Studio',
        content: SketchUpStudio,
    },
    ExtensionWarehouse: {
        title: 'Extension Warehouse',
        content: ExtensionWarehouse,
    },
    SketchUpForInternet: {
        title: 'SketchupUp для интернета',
        content: SketchUpForInternet,
    },
    TrimbleConnect: {
        title: 'Trimble Connect',
        content: TrimbleConnect,
    },
    AllPlanArchitecture: {
        title: 'Allplan Architecture',
        content: AllPlanArchitecture,
    },
    PLANBAR: {
        title: 'PLANBAR',
        content: PLANBAR,
    },
    AllplanEngineeringBuilding: {
        title: 'Allplan Engineering Building',
        content: AllplanEngineeringBuilding,
    },
    AllplanLinear: {
        title: 'AllplanLinear',
        content: AllplanLinear,
    },
    PrivacyPolicy: {
        title: 'Политика конфиденциальности ООО "Баркат-Штейн"',
        content: PrivacyPolicy,
    },
    UserAgreement: {
        title: 'Договор публичной оферты ООО "Баркат-Штейн"',
        content: UserAgreement,
    },
    BuySketchUpShop: {
        title: 'Купить SketchUp Shop',
        content: BuySketchUpShop,
    },
    BuySketchUpPro: {
        title: 'Купить SketchUp Pro',
        content: BuySketchUpPro,
    },
    BuySketchUpStudio: {
        title: 'Купить SketchUp Studio',
        content: BuySketchUpStudio,
    },
    BuySketchUpHigher: {
        title: 'Купить SketchUp для высшего образования',
        content: BuySketchUpHigher,
    },
    xPick: {
        title: 'Купить TeamViewer Frontline xPick',
        content: TeamViewerXPick,
    },
}
