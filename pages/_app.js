import App from "next/app";
import Router from "next/router";
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import GothamProBold from "../src/assets/fonts/GothamPro-Bold.ttf";
import GothamProLight from "../src/assets/fonts/GothamPro-Light.ttf";
import Algerian from "../src/assets/fonts/Algerian.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "GothamPro";
      src: url("${GothamProBold}") format("truetype");
      font-weight: 500;
      font-style: normal;
      font-display: none;
  }

  @font-face {
      font-family: "Algerian";
      src: url("${Algerian}") format("truetype");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  .fullscreen-image {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.6);

    img {
      width: 50%;
    }
  }

  @font-face {
    font-family: "GothamPro";
    src: url("${GothamProLight}") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: none;
  }

  *{
      font-family: "GothamPro";
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-weight: 300;
  }

  h1 {
    font-size: 94px;
    line-height: 100px;
    font-weight: 500;

    @media screen and (max-width: 1440px) {
      font-size: 84px;
      line-height: 84px;
    }
  }

  h2 {
    font-size: 72px;
    line-height: 74px;
    font-weight: 500;
  }

  h3 {
    font-size: 48px;
    line-height: 60px;
    font-weight: 500;
  }

  p {
    font-size: 24px;
    line-height: 36px;
    font-weight: 300;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const mockedUrls = ["/engineer-nets", "/agro-solutions"];

export default class MyApp extends App {
  componentDidMount() {
    Router.events.on("routeChangeComplete", this.handleRouteChange);
  }

  handleRouteChange(url) {
    if (mockedUrls.includes(url)) Router.push("/");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
