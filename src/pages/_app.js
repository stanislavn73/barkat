import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

import ua from '../../lang/ua.json'
import ru from '../../lang/ru.json'
import en from '../../lang/en.json'

const messages = { ua, en, ru }

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

const mockedUrls = ['/engineer-nets', '/agro-solutions']
export default function MyApp({ Component, pageProps }) {
    const { locale } = useRouter()

    const handleRouteChange = url => {
        if (mockedUrls.includes(url)) Router.push('/')
    }

    useEffect(() => {
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [Router])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <title>Barkat Stein</title>
            {/*<IntlProvider locale={locale} messages={messages[locale]}>*/}
            <Component {...pageProps} />
            {/*</IntlProvider>*/}
        </ThemeProvider>
    )
}
