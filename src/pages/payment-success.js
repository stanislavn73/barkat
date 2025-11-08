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
    const translations = loadTranslations(locale)

    return {
        props: {
            translations,
        },
    }
}

export default Success
