import React from 'react'
import Layout from '../components/layouts/Layout'
import EventPage from '../components/pages/EventPage/EventPage'

export default function events() {
    return (
        <Layout page='events'>
            <EventPage />
        </Layout>
    )
}
