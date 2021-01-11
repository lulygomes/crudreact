import styled from 'styled-components';

export const Container = styled.main`
  margin: 20px;
  background-color: #fdfdfd;
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.68);
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;

  div {
    margin-left: 8px;
    max-height: 220px;

    h3 {
      margin-bottom: 15px;
    }
  }
`;
