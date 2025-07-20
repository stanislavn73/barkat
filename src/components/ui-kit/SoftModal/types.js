import Revit from './content/Revit'
import AllPlanArchitecture from './content/AllPlanArchitecture'
import PLANBAR from './content/PLANBAR'
import AllplanEngineeringBuilding from './content/AllplanEngineeringBuilding'
import AllplanLinear from './content/AllplanLinear'
import PrivacyPolicy from './content/PrivacyPolicy'
import BuySketchUpShop from './content/BuyButtons/BuySketchUpShop'
import BuySketchUpPro from './content/BuyButtons/BuySketchUpPro'
import BuySketchUpStudio from './content/BuyButtons/BuySketchUpStudio'
import BuySketchUpHigher from './content/BuyButtons/BuySketchUpHigher'
import UserAgreement from './content/UserAgreement'
import { TeamViewer } from './content/TeamViewer'
import { GoogleCloud } from './content/GoogleCloud/GoogleCloud'

export default softTranslation => ({
    REVIT: {
        title: 'Autodesk Revit',
        content: Revit(softTranslation.revit.modal),
    },
    AUTOCAD: {
        title: 'AutoCAD',
        content: Revit(softTranslation.autocad.modal),
    },
    AUTODESK_AEC_COLLECTION: {
        title: 'Autodesk AEC Collection',
        content: Revit(softTranslation.aec.modal),
    },
    NAVISWORKS: {
        title: 'Autodesk Navisworks',
        content: GoogleCloud(softTranslation.navisworks.modal),
    },
    CIVIL_3D: {
        title: 'Autodesk Civil 3D',
        content: GoogleCloud(softTranslation.civil3d.modal),
    },
    geoMedia: {
        title: 'GeoMedia',
        content: GoogleCloud(softTranslation.geoMedia.modal),
    },
    erdasImagine: {
        title: 'Erdas Imagine',
        content: GoogleCloud(softTranslation.erdasImagine.modal),
    },
    imageStation: {
        title: 'Image Station',
        content: GoogleCloud(softTranslation.imageStation.modal),
    },
    erdasApollo: {
        title: 'Erdas Apollo',
        content: GoogleCloud(softTranslation.erdasApollo.modal),
    },
    mAppEnterprise: {
        title: 'M.App Enterprise',
        content: GoogleCloud(softTranslation.mAppEnterprise.modal),
    },
    luciad: {
        title: 'Luciad',
        content: GoogleCloud(softTranslation.luciad.modal),
    },
    genPlan: {
        title: softTranslation.genPlan.title,
        content: GoogleCloud(softTranslation.genPlan.modal),
    },
    MicroStation: {
        title: 'MicroStation',
        content: GoogleCloud(softTranslation.microStation.modal),
    },
    Plaxis: {
        title: 'PLAXIS',
        content: GoogleCloud(softTranslation.plaxis.modal),
    },
    Staad: {
        title: 'STAAD',
        content: GoogleCloud(softTranslation.staad.modal),
    },
    ContextCapture: {
        title: 'ContextCapture',
        content: GoogleCloud(softTranslation.contextCapture.modal),
    },
    SYNCHRO: {
        title: 'SYNCHRO',
        content: GoogleCloud(softTranslation.synchro.modal),
    },
    ProStructures: {
        title: 'ProStructures',
        content: GoogleCloud(softTranslation.proStructures.modal),
    },
    sketchUpPro: {
        title: 'SketchUp Pro',
        content: GoogleCloud(softTranslation.sketchUpPro.modal),
    },
    sketchUpShop: {
        title: 'SketchUp Shop',
        content: GoogleCloud(softTranslation.sketchUpShop.modal),
    },
    sketchUpEducation: {
        title: softTranslation.sketchUpEducation.title,
        content: GoogleCloud(softTranslation.sketchUpEducation.modal),
    },
    sketchUpStudio: {
        title: 'SketchUp Studio',
        content: GoogleCloud(softTranslation.sketchUpStudio.modal),
    },
    extensionWarehouse: {
        title: 'Extension Warehouse',
        content: GoogleCloud(softTranslation.extensionWarehouse.modal),
    },
    sketchUpFree: {
        title: 'SketchupUp Free',
        content: GoogleCloud(softTranslation.sketchUpFree.modal),
    },
    trimbleConnect: {
        title: 'Trimble Connect',
        content: GoogleCloud(softTranslation.trimbleConnect.modal),
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
        title: 'Публічний договір (ОФЕРТА)',
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
        title: 'TeamViewer Frontline xPick',
        content: TeamViewer(softTranslation.xPick.modal),
    },
    xAssist: {
        title: 'TeamViewer Frontline xAssist',
        content: TeamViewer(softTranslation.xAssist.modal),
    },
    xMake: {
        title: 'TeamViewer Frontline xMake',
        content: TeamViewer(softTranslation.xMake.modal),
    },
    xInspect: {
        title: 'TeamViewer Frontline xInspect',
        content: TeamViewer(softTranslation.xInspect.modal),
    },

    stratoZone: {
        title: 'Google Cloud Stratozone',
        content: GoogleCloud(softTranslation.stratoZone.modal),
    },
    vmWare: {
        title: 'Google Cloud VMWare Engine',
        content: GoogleCloud(softTranslation.vmWare.modal),
    },
    bigQuery: {
        title: 'Big Query Machine Learning',
        content: GoogleCloud(softTranslation.bigQuery.modal),
    },
    networking: {
        title: 'Google Cloud Networking',
        content: GoogleCloud(softTranslation.networking.modal),
    },
    distributedCloud: {
        title: 'Distributed Cloud',
        content: GoogleCloud(softTranslation.distributedCloud.modal),
    },
    security: {
        title: 'Security and Identity Chronicle',
        content: GoogleCloud(softTranslation.security.modal),
    },
    cloudStorage: {
        title: 'Google Cloud Storage',
        content: GoogleCloud(softTranslation.cloudStorage.modal),
    },
    cloudDatabases: {
        title: 'Google Cloud Databases',
        content: GoogleCloud(softTranslation.cloudDatabases.modal),
    },
    api: {
        title: 'Google Api',
        content: GoogleCloud(softTranslation.api.modal),
    },
    googleKubernetes: {
        title: 'Google Kubernetes Engine',
        content: GoogleCloud(softTranslation.googleKubernetes.modal),
    },
    computeEngine: {
        title: 'Google Cloud Compute Engine',
        content: GoogleCloud(softTranslation.computeEngine.modal),
    },
    bard: {
        title: 'Artificial Intelligence (AI) Google Bard',
        content: GoogleCloud(softTranslation.bard.modal),
    },
    workspaceStarter: {
        title: 'Google Workspace Business Starter',
        content: GoogleCloud(softTranslation.workspaceStarter.modal),
    },
    workspaceStandard: {
        title: 'Google Workspace Business Standard',
        content: GoogleCloud(softTranslation.workspaceStandard.modal),
    },
    workspaceBusinessPlus: {
        title: 'Google Workspace Business Plus',
        content: GoogleCloud(softTranslation.workspaceBusinessPlus.modal),
    },
    workspaceEnterprise: {
        title: 'Google Workspace Enterprise',
        content: GoogleCloud(softTranslation.workspaceEnterprise.modal),
    },
})
