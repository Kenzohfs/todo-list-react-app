import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline:0;

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${theme.colors.white};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${theme.colors.gray};
    }

    &::-webkit-scrollbar {
      width: 8px !important;
      height: 8px !important;
    }
  }

  body {
    font-size: ${theme.fontSizes.default};
    line-height: 1.5;
    font-family: ${theme.fonts.default};
    color: ${theme.colors.black};

    background: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;

    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6,button,a,b {
    font-family: ${theme.fonts.default};
  }

  label {
    font-size: .875rem;
    font-family: ${theme.fonts.default};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.blue}
  }

  input {
    accent-color: ${theme.colors.gray};
    font-family: ${theme.fonts.default};
  }

`;

export default globalStyle;