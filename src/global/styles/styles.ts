import Styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none;
      /* outline: none; // to do */
    }

    html, body {
      background: #111;
      color: #fff;
      font-family: sans-serif;
      font-size: 1.1rem;
    }
`;