import { createGlobalStyle } from 'styled-components'
import GothamProBold from '../../public/fonts/GothamPro-Bold.ttf'
import Algerian from '../../public/fonts/Algerian.ttf'
import GothamProLight from '../../public/fonts/GothamPro-Light.ttf'

export const GlobalStyle = createGlobalStyle`
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

  @font-face {
    font-family: "GothamPro";
    src: url("${GothamProLight}") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: none;
  }

  #__next{
    margin:0 auto 0 auto;
    overflow: hidden;
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
`
