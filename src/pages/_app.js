import Router, { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/GlobalStyle'

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

const mockedUrls = ['/engineer-nets', '/agro-solutions']

function App({ Component, pageProps }) {
    const { locale } = useRouter()
    let detectLocale =
        locale || navigator.language || navigator.userLanguage || 'en'

    let resultLocale
    if (detectLocale.includes('ru')) resultLocale = 'ru'
    if (detectLocale.includes('ua')) resultLocale = 'ua'
    if (detectLocale.includes('en') || !resultLocale) resultLocale = 'en'

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <title>Barkat Stein</title>

            <Component {...pageProps} locale={resultLocale} />
        </ThemeProvider>
    )
}

export default App
