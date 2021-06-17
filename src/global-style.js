import { createGlobalStyle } from "styled-components";
import { fontSize } from './const';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: ${fontSize};
  }
`;