import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  padding: 30px 50px;
  background-color: #ddd;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderText = styled(Link)`
  flex: 2;
  margin-left: 3rem;
  text-decoration: none;

  h1{
    font-size: 30px;
    text-transform: uppercase;
    color: black;
  }
`;

export const FormHeader = styled.form`
  flex: 1;
  margin-right: 20px;
`;

export const NavButton = styled.nav`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  width: 250px;
`;
