import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)<{ active?: string }>`
  display: inline-block;
  font-size: ${props => props.active === "home" || props.active === "addcontact" || props.active === "activetab" ? "18px":"16px"};
  color: ${props => props.active === "home" || props.active === "addcontact" || props.active === "view" ? "black":"white"};
  background-color: ${props => props.active === "update" && "#008cba"};
	background-color: ${props => props.active === "delete" && "#f44336"};
	background-color: ${props => props.active === "view" && "#e7e7e7"};
	background-color: ${props => props.active === "reset" && "darkolivegreen"};
	background-color: ${props => props.active === "active" && "#808c4a"};
	background-color: ${props => props.active === "inactive" && "#445f61"};
	background-color: ${props => props.active === "activetab" && "dodgerblue"};
  padding: ${props => props.active === "home" || props.active === "addcontact" || props.active === "activetab" ? "10px":"5px 8px"};
  border: none;
	border-radius: ${props => props.active === "home" || props.active === "addcontact" || props.active === "activetab" ? "5px":"4px"};
  text-align: center;
	text-decoration: none;
	cursor: pointer;

  &:hover{
		background-color: ${props => props.active === "home" || props.active === "addcontact" ? "#ddd":""};
		color: ${props => props.active === "home" || props.active === "addcontact" ? "#5d6770":""};
	}
`;

export const ButtonSubmit = styled.button`
	width: 100%;
	border-radius: 4px;
	margin: 8px 0;
	padding: 14px 20px;
	background-color: #4caf58;
	font-size: 16px;
	color: white;
	border: none;
	cursor: pointer;
`;
