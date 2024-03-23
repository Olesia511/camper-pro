import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: ${(p) => p.theme.color.black}
}

/* body {
 margin: 0;
 display: flex;
 place-items: center;
 min-width: 100vw;
 min-height: 100vh;
} */

/* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  padding: 0;
  border: none;
  
  background-color: transparent;
}

img {
  display: block;
  /* max-width: 100%; */
  object-fit: cover;
}

`;
