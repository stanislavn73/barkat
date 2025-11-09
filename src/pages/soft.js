import Soft from '../components/pages/SoftPage'
import Layout from '../components/layouts/Layout'
import { loadTranslations } from '../utils/loadTranslations'

function HomePage({ locale, translations }) {
    return (
        <Layout page='soft' locale={locale} translations={translations}>
            <Soft />
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    // Only load the namespaces this page actually uses
    const translations = loadTranslations(locale, [
        'common',
        'forms',
        'legal',
        'soft',
        'google-workspace',
    ])

    return {
        props: {
            translations,
        },
    }
}

export default HomePage
