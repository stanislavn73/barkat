import React from 'react'
import Home from '../components/pages/HomePage'
import Layout from '../components/layouts/Layout'
import { loadTranslations } from '../utils/loadTranslations'

function HomePage({ locale, translations }) {
    return (
        <Layout locale={locale} translations={translations}>
            <Home />
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    // Only load the namespaces this page actually uses
    const translations = loadTranslations(locale, ['common', 'home', 'forms', 'projects'])

    return {
        props: {
            translations,
        },
    }
}

export default HomePage
