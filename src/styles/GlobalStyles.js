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

a {
  text-decoration:none;
  color: inherit;
}

img {
  max-width:100%;
}

li {list-style-type:none}

ul {padding: 0;}

h1, h2, p {margin: 0; padding: 0;}
`;

export default GlobalStyles;
