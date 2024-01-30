import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  :root {
    --color-white: #ffffff;
    --color-yellow: #FFFF00;
    --color-red: #FF0000;
    --color-blue: #004BFF;
    --color-black: #000000;
  }

  body, button, input {
    font-family: 'Noto Serif KR';
  }
`;

export default GlobalStyles;
