import styled, { createGlobalStyle } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 151px auto;
  grid-template-rows: 100px calc(100vh - 100px);
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    
    background-color: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
