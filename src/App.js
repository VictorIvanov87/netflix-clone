import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import { PublicRoute, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<PublicRoute
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.SIGN_IN}
				exact
			>
				<SignIn />
			</PublicRoute>
			<PublicRoute
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.SIGN_UP}
				exact
			>
				<SignUp />
			</PublicRoute>
			<PublicRoute
				user={user}
				loggedInPath={ROUTES.BROWSE}
				path={ROUTES.HOME}
				exact
			>
				<Home />
			</PublicRoute>
			<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
				<Browse />
			</ProtectedRoute>
		</Router>
	);
}

export default App;
