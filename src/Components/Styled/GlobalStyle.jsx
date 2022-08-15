import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,
  h2,
  h3 {
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input, button {
    font: inherit;
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export default GlobalStyle;
