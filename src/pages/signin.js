import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Navbar, Footer, Form } from '../components';
import { SIGN_UP, BROWSE } from '../constants/routes';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const history = useHistory();

	const { firebase } = useContext(FirebaseContext);

	const isInvalid = password === '' || email === '';

	const handleSignIn = async (event) => {
		event.preventDefault();

		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			history.push(BROWSE);
		} catch (error) {
			setEmail('');
			setPassword('');
			setError(error.message);
		}
	};

	return (
		<>
			<Navbar />
			<Form>
				<Form.Title>Sign In</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}
				<Form.Base onSubmit={handleSignIn} method="POST">
					<Form.Input
						placeholder="Email Address"
						type="email"
						value={email}
						onChange={({ target }) => setEmail(target.value)}
					></Form.Input>
					<Form.Input
						placeholder="Password"
						type="password"
						autoComplete="off"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					></Form.Input>
					<Form.Submit disabled={isInvalid} type="submit">
						Sign In
					</Form.Submit>
				</Form.Base>
				<Form.Text>
					New to Netflix? <Form.Link to={SIGN_UP}>Sign up now.</Form.Link>
				</Form.Text>
				<Form.TextSmall>
					This page is protected by Google reCAPTCHA to ensure you are not a
					bot. Learn more.
				</Form.TextSmall>
			</Form>
			<Footer />
		</>
	);
}

export default SignIn;
