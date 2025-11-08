import React from 'react'
import Layout from '../components/layouts/Layout'
import EventPage from '../components/pages/EventPage/EventPage'
import { loadTranslations } from '../utils/loadTranslations'

export default function events({ locale, translations }) {
    return (
        <Layout page='events' locale={locale} translations={translations}>
            <EventPage />
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
