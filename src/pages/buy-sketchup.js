import Layout from '../components/layouts/Layout'
import BuySketchUp from '../components/pages/BuySoft/BuySketchUp'

export default function buySoft({ locale }) {
    return (
        <Layout locale={locale}>
            <BuySketchUp />
        </Layout>
    )
}
