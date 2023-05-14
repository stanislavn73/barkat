import Soft from '../components/pages/SoftPage'
import Layout from '../components/layouts/Layout'

function HomePage({ locale }) {
    return (
        <Layout page='soft' locale={locale}>
            <Soft />
        </Layout>
    )
}

export default HomePage
