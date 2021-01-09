import styled from 'styled-components';

export const Container = styled.main`
  background-color: #fdfdfd;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Content = styled.section`
  padding: 16px 0 0 16px;
  color: #333;
  letter-spacing: 0.1rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 300;
  }

  hr {
    margin: 8px 0;
  }

  p {
    line-height: 1.5;
    margin-top: 16px;
    font-size: 20px;
    width: 70%;
  }
`;
