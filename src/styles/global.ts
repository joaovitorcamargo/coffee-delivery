import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, h5 {
    font-family: 'Roboto', sans-serif;
  }

  header, h1 {
    font-family: 'Baloo 2', cursive;
  }
`;
