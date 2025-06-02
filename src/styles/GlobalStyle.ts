import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html[data-theme="light"] {
    --bulma-body-background-color: hsl(45, 29%, 97%);
  }

  body.has-background {
    background-color: var(--bulma-body-background-color);
  }

`;

export default GlobalStyle;
