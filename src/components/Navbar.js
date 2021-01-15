import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/netflix-logo.png';
import Avatar from '../assets/img/netflix-avatar.png';

const Nav = styled.div`
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

const NetflixLogo = styled.img`
	height: 50px;
	object-fit: contain;
`;

const NetflixAvatar = styled.img`
	height: 32px;
	object-fit: contain;
`;

function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleScroll = useCallback(() => {
		if (window.scrollY > 100) {
			setShowNavbar(true);
		} else {
			setShowNavbar(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return (
		<Nav className={showNavbar && 'black-background'}>
			<NetflixLogo src={Logo} />
			<NetflixAvatar src={Avatar} />
		</Nav>
	);
}

export default Navbar;
