import styled from 'styled-components';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	top: 0;
	padding: 20px 30px;
	z-index: 2;
	box-sizing: border-box;
	transition: all 0.25s ease-in;

	&.black-background {
		background-color: #111;
	}
`;

export const NetflixLogo = styled.img`
	height: 50px;
	object-fit: contain;
`;

export const NavbarProfile = styled.div`
	display: flex;
`;


export const NavbarAvatar = styled.img`
	height: 32px;
	margin: 0 10px;
	object-fit: contain;
`;

export const NavbarButton = styled(ReactRouterLink)`
	display: block;
	background-color: #e50914;
	width: 84px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;
	box-sizing: border-box;

	&:hover {
		background-color: #f40612;
	}
`;