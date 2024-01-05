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
    --color-lightgrey: #a3a3a3;
    --color-darkgrey: #323232;
    --color-orange: #fc9400;
    --color-black: #000000;
  }
`;

export default GlobalStyles;
