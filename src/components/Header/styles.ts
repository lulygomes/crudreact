import styled from 'styled-components';

export const Container = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;

  background: #f4f4f4;
  color: #232129;
  height: 100px;
  width: 100%;

  display: flex;
`;

export const Logo = styled.div`
  background-color: #111;
  height: 100px;
  padding: 5;

  img {
    margin: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px;
  }

  div {
    margin-left: 5px;
  }
`;
