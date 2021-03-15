import React, { useCallback, useEffect, useState } from 'react';
import Logo from '../../assets/img/netflix-logo.png';
import Avatar from '../../assets/img/netflix-avatar.png';
import {
	Nav,
	NetflixLogo,
	NavbarAvatar,
	NavbarProfile,
	NavbarButton,
} from './styles/Navbar';
import { SIGN_IN } from '../../constants/routes';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useAuthListener } from '../../hooks';

function Navbar() {
	const { user } = useAuthListener();
	const history = useHistory();
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

	const logOut = async () => {
		await firebase.auth().signOut();
		history.push(SIGN_IN);
	};

	return (
		<Nav className={showNavbar && 'black-background'}>
			<NetflixLogo src={Logo} />
			<NavbarProfile>
				{user ? (
					<>
						<NavbarAvatar src={`./images/users/${user.photoURL}.png`} />
						<NavbarButton
							onClick={() => {
								logOut();
							}}
						>
							Sign Out
						</NavbarButton>
					</>
				) : null}
			</NavbarProfile>
		</Nav>
	);
}

export default Navbar;
