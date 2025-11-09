import React from 'react'
import Layout from '../components/layouts/Layout'
import PaymentSuccess from '../components/pages/PaymentSuccess'
import { loadTranslations } from '../utils/loadTranslations'

function Success({ locale, translations }) {
    return (
        <Layout locale={locale} translations={translations}>
            <PaymentSuccess />
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    // Only load the namespaces this page actually uses
    const translations = loadTranslations(locale, ['common', 'forms', 'legal'])

    return {
        props: {
            translations,
        },
    }
}

export default Success
