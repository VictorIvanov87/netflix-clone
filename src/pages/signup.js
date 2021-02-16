import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Navbar, Footer, Form } from '../components';
import { SIGN_IN, BROWSE } from '../constants/routes';

function SignUp() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const history = useHistory();

	const { firebase } = useContext(FirebaseContext);

	const isInvalid = firstName === '' || password === '' || email === '';

	const handleSignUp = async (event) => {
		event.preventDefault();

		try {
			const result = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);

			await result.user.updateProfile({
				displayName: firstName,
				photoURL: Math.floor(Math.random() * 5) + 1,
			});
			
			history.push(BROWSE);
		} catch (error) {
			setFirstName('');
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
				<Form.Base onSubmit={handleSignUp} method="POST">
					<Form.Input
						placeholder="First Name"
						type="text"
						value={firstName}
						onChange={({ target }) => setFirstName(target.value)}
					></Form.Input>
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
						Sign Up
					</Form.Submit>
				</Form.Base>
				<Form.Text>
					Already a user? <Form.Link to={SIGN_IN}>Sign in now.</Form.Link>
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

export default SignUp;
