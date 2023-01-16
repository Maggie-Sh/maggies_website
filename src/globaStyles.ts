import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  background-color: inherit;
  border: 0;
  cursor: pointer;
}
a {
  text-decoration:none;
  color:inherit;
}
/* *::-webkit-scrollbar {
  width: 5px;
} */
/* ::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 73%, 15%);
  border-radius: 5px;
} */
/* *::-webkit-scrollbar-thumb:hover {
  background: #555;
} */
`;
