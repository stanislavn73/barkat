import React from 'react'
import Layout from '../src/components/layouts/Layout'
import BuySketchUp from '../src/components/pages/BuySoft/BuySketchUp'

export const CurrencyContext = React.createContext()

export default function buySoft({ hryvnaExchangeRate }) {
    return (
        <CurrencyContext.Provider value={{ hryvnaExchangeRate }}>
            <Layout>
                <BuySketchUp />
            </Layout>
        </CurrencyContext.Provider>
    )
}

export async function getServerSideProps() {
    try {
        const liqpay =
            'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
        const response = await fetch(liqpay)
        if (response.status !== 200) {
            throw new Error("Can't fetch liqpay currencies")
        }

        const data = await response.json()
        const dollar = data.find(curr => curr.ccy === 'USD')

        return { props: { hryvnaExchangeRate: dollar.sale } }
    } catch (err) {
        console.error(err)
        return { props: { data: null } }
    }
}
