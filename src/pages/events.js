import React from 'react'
import Layout from '../components/layouts/Layout'
import EventPage from '../components/pages/EventPage/EventPage'

export default function events({ locale }) {
    return (
        <Layout page='events' locale={locale}>
            <EventPage />
        </Layout>
    )
}
