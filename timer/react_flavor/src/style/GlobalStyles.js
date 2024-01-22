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
    --color-f-white: #ffffff;
    --color-f-green: #568037;
    --color-f-yellow: #FBF23B;
    --color-b-lightgreen: #92CD5F;
    --color-b-green: #69A13F;
    --color-b-deepgreen: #7ABC49;
  }
`;

export default GlobalStyles;
