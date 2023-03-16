import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 1.6rem;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyles;
