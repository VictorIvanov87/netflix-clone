import React, { useCallback, useEffect, useState } from 'react';
import Logo from '../../assets/img/netflix-logo.png';
import Avatar from '../../assets/img/netflix-avatar.png';
import { Nav, NetflixAvatar, NetflixLogo } from './styles/Navbar';

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
