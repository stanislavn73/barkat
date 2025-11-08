import Layout from '../components/layouts/Layout'
import BuySketchUp from '../components/pages/BuySoft/BuySketchUp'
import { loadTranslations } from '../utils/loadTranslations'

export default function buySoft({ locale, translations }) {
    return (
        <Layout locale={locale} translations={translations}>
            <BuySketchUp />
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const translations = loadTranslations(locale)

    return {
        props: {
            translations,
        },
    }
}
