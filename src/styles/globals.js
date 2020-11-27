import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  * {
    font-family: 'Fira Code', -apple-system, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;