import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  border: 1px solid black;
}

body {
    margin: 0;
    font-family: "Helvetica Neue", "Noto Sans KR", Helvetica, Arial, sans-serif;
}
`;

export default GlobalStyles;
