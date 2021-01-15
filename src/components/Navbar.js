import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/netflix-logo.png';
import Avatar from '../assets/img/netflix-avatar.png';

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	top: 0;
	padding: 20px;
	z-index: 2;
	box-sizing: border-box;
	transition: all 0.25s ease-in;
	
	&.black-background {
		background-image: linear-gradient(
			0deg,
			transparent,
			rgba(37, 37, 37, 0.6) 20%,
			#111 70%
		);
	}
`;

const NetflixLogo = styled.img`
	height: 40px;
	object-fit: contain;
`;

const NetflixAvatar = styled.img`
	height: 40px;
	object-fit: contain;
`;

function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if(window.scrollY > 100) {
				setShowNavbar(true);
			} else {
				setShowNavbar(false);
			}
		});

		return () => {
			window.removeEventListener('scroll')
		}
	}, [])
	
	return (
		<Nav className={showNavbar && 'black-background'}>
			<NetflixLogo src={Logo} />
			<NetflixAvatar src={Avatar} />
		</Nav>
	);
}

export default Navbar;
