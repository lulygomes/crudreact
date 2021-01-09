import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #111;
`;

export const NavList = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  width: 70%;
  text-align: center;
  padding: 16px;
  margin: 8px auto;
  border-radius: 16px;
  background-color: #605c6b;
  transition: background-color 0.4s;

  &:first-child {
    margin-top: 20px;
  }

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
