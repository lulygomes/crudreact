import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #312e38;
`;

export const NavList = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const NavIten = styled.li`
  padding: 16px;
  margin: 8px 0;
  border-radius: 16px;
  background-color: #605c6b;
  transition: background-color 0.4s;

  a {
    text-decoration: none;
    color: #f4f4f4;
    font-size: 20px;
  }

  &:hover {
    background-color: #f4f4f4;

    a {
      color: #232129;
    }
  }
`;
