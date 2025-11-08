const softEn = require('./../../../locales/en/soft.json')
const softRu = require('./../../../locales/ru/soft.json')
const softUa = require('../../../locales/ua/soft.json')

const commonEn = require('./../../../locales/en/common.json')
const commonRu = require('./../../../locales/ru/common.json')
const commonUa = require('../../../locales/ua/common.json')

const facadesEn = require('./../../../locales/en/facades.json')
const facadesRu = require('./../../../locales/ru/facades.json')
const facadesUa = require('../../../locales/ua/facades.json')

const formsEn = require('./../../../locales/en/forms.json')
const formsRu = require('./../../../locales/ru/forms.json')
const formsUa = require('../../../locales/ua/forms.json')

const homeEn = require('./../../../locales/en/home.json')
const homeRu = require('./../../../locales/ru/home.json')
const homeUa = require('../../../locales/ua/home.json')

const buySketchupEn = require('./../../../locales/en/buy-sketchup.json')
const buySketchupRu = require('./../../../locales/ru/buy-sketchup.json')
const buySketchupUa = require('../../../locales/ua/buy-sketchup.json')

const projectsEn = require('./../../../locales/en/projects.json')
const projectsRu = require('./../../../locales/ru/projects.json')
const projectsUa = require('../../../locales/ua/projects.json')

const googleWorkspaceEn = require('./../../../locales/en/google-workspace.json')
const googleWorkspaceRu = require('./../../../locales/ru/google-workspace.json')
const googleWorkspaceUa = require('../../../locales/ua/google-workspace.json')

const legalEn = require('./../../../locales/en/legal.json')
const legalRu = require('./../../../locales/ru/legal.json')
const legalUa = require('../../../locales/ua/legal.json')

const translate = {
    en: { soft: softEn, common: commonEn, facades: facadesEn, forms: formsEn, home: homeEn, 'buy-sketchup': buySketchupEn, projects: projectsEn, 'google-workspace': googleWorkspaceEn, legal: legalEn },
    ru: { soft: softRu, common: commonRu, facades: facadesRu, forms: formsRu, home: homeRu, 'buy-sketchup': buySketchupRu, projects: projectsRu, 'google-workspace': googleWorkspaceRu, legal: legalRu },
    ua: { soft: softUa, common: commonUa, facades: facadesUa, forms: formsUa, home: homeUa, 'buy-sketchup': buySketchupUa, projects: projectsUa, 'google-workspace': googleWorkspaceUa, legal: legalUa },
}

const fetchTranslations = async (req, res) => {
    // const { locale } = JSON.parse(req.body)

    res.status(200).json(translate)
}

export default fetchTranslations
