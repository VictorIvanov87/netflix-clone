import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

function useAuthListener() {
	const { firebase } = useContext(FirebaseContext);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem('user');
				setUser(null);
			}
		});

		return () => listener();
	}, [firebase]);

	return { user };
}

export default useAuthListener;
