import styled from 'styled-components';

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

export const NetflixAvatar = styled.img`
	height: 32px;
	object-fit: contain;
`;
