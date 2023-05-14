import React from 'react'
import Facades from '../components/pages/FacadesPage'
import Layout from '../components/layouts/Layout'

function HomePage({ locale }) {
    return (
        <Layout locale={locale}>
            <Facades />
        </Layout>
    )
}

export default HomePage
