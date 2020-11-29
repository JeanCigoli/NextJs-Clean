import { createGlobalStyle } from "styled-components";
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* width */
    ::-webkit-scrollbar {
      width: 7px;
      background: ${theme.colors.grayBold};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 0px 10px 10px 0px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
    }
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
