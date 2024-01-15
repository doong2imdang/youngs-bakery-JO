import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    background: var(--color-lightorange);
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  :root {
    --color-white: #ffffff;
    --color-lightgrey: #F2F2F2;
    --color-grey: #BDBDBD;
    --color-darkgrey: #3F3F3F;
    --color-brown: #A59B9B;
    --color-lightorange: #FFD2B9;
    --color-orange: #FF7D35;
    --color-black: #000000;
  }

  @media screen and (max-width: 792px) {
    body {
      background: var(--color-darkgrey);
    }
  }
`;

export default GlobalStyles;
