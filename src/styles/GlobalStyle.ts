import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  ul,ol,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #fff inset;

  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #000 !important;
  }
`

export default GlobalStyle;