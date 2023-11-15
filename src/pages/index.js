import React from 'react'
import Home from '../components/pages/HomePage'
import Layout from '../components/layouts/Layout'

function HomePage({ locale }) {
    return (
        <Layout locale={locale}>
            <Home />
        </Layout>
    )
}

export default HomePage
