import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #605c6b;
  border-radius: 10px;
  background-color: #605c6b;
  color: #f4f4f4;
  padding: 10px;
  margin: 8px;
  flex-grow: 1;

  svg {
    margin: 4px;
  }

  input {
    margin-top: 4px;
    border: none;
    background-color: transparent;
    color: #f4f4f4;
    margin-left: 4px;
  }
`;
