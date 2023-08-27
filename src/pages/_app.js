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
    const { locale, push, locales, pathname, ...rest } = useRouter()

    let resultLocale = locale.includes('UA') ? 'ua' : locale

    useEffect(() => {
        const newLocale = locales.find(locale =>
            locale.includes(navigator.language)
        )
        if (
            !locales.some(currentLocale => currentLocale === locale) &&
            newLocale
        ) {
            push(pathname, {}, { locale: newLocale })
        }
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <title>Barkat Stein</title>

            <Component {...pageProps} locale={resultLocale} />
        </ThemeProvider>
    )
}

export default App
