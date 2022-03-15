import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
  }

  .app{
    min-height: 100vh;
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 2%;
  }
`;