import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  /* border: 1px solid black; */
  button {
    outline: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}

body {
    margin: 0;
    font-family: "Helvetica Neue", "Noto Sans KR", Helvetica, Arial, sans-serif;
}
`;

export default GlobalStyles;
