import Projects from '../components/pages/ProjectsPage'
import Layout from '../components/layouts/Layout'

function HomePage({ locale }) {
    return (
        <Layout locale={locale}>
            <Projects />
        </Layout>
    )
}

export default HomePage
