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
    // Only load the namespaces this page actually uses
    const translations = loadTranslations(locale, ['common', 'about', 'forms', 'projects', 'legal'])

    return {
        props: {
            translations,
        },
    }
}

export default HomePage
