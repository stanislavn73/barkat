import React from 'react'
import Layout from '../src/components/layouts/Layout'
import EventPage from "../src/components/pages/EventPage/EventPage";

export default function events() {
  return (
    <Layout page='events' >
      <EventPage /> 
    </Layout>
  )
}
