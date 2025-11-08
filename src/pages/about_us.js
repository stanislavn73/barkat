import Projects from '../components/pages/ProjectsPage'
import Layout from '../components/layouts/Layout'
import { loadTranslations } from '../utils/loadTranslations'

function HomePage({ locale, translations }) {
    return (
        <Layout locale={locale} translations={translations}>
            <Projects />
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

export default HomePage
