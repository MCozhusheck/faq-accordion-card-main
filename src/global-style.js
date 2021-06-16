import { createGlobalStyle } from "styled-components";
import { fontSize } from './const';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

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