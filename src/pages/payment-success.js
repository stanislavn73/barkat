import React from 'react'
import Layout from '../components/layouts/Layout'
import PaymentSuccess from '../components/pages/PaymentSuccess'

function Success({ locale }) {
    return (
        <Layout locale={locale}>
            <PaymentSuccess />
        </Layout>
    )
}

export default Success
