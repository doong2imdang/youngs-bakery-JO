import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import bg from "../images/main-bg.svg";

const GlobalStyles = createGlobalStyle`
  ${reset}
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  body {
    background: url(${bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  :root {
    --color-f-white: #ffffff;
    --color-f-green: #568037;
    --color-f-yellow: #FBF23B;
    --color-b-lightgreen: #92CD5F;
    --color-b-green: #69A13F;
    --color-b-deepgreen: #7ABC49;
    --color-b-blue: #3661CC;
    --color-b-red: #F84A34;
    --color-b-yellow: #F9F03E;
  }
`;

export default GlobalStyles;
