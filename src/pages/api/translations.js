const en = require('./../../../locales/en/soft.json')
const ru = require('./../../../locales/ru/soft.json')
const ua = require('../../../locales/ua/soft.json')

const commonEn = require('./../../../locales/en/common.json')
const commonRu = require('./../../../locales/ru/common.json')
const commonUa = require('../../../locales/ua/common.json')

const translate = {
    en: { soft: en, common: commonEn },
    ru: { soft: ru, common: commonRu },
    ua: { soft: ua, common: commonUa },
}

const fetchTranslations = async (req, res) => {
    // const { locale } = JSON.parse(req.body)

    res.status(200).json(translate)
}

export default fetchTranslations