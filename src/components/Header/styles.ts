import styled from 'styled-components';

export const Container = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;

  background: #f4f4f4;
  color: #232129;
  height: 100px;
  width: 100%;
  box-shadow: 0px 5px 17px 0px #533894;

  display: flex;
`;

export const Logo = styled.div`
  background-color: #111;
  height: 100px;
  width: 225px;
  padding: 5;
  display: flex;
  align-items: center;
  justify-content: center;

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
