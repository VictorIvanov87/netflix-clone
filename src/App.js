import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {
	JumbotronContainer,
	FooterContainer,
	FaqsContainer,
} from './containers';
import {Home, Browse, SignIn, SignUp} from './pages';

function App() {
	return (
		<Router>
			<Route exact path={ROUTES.HOME}></Route>
			<FaqsContainer />
			<JumbotronContainer />
			<FooterContainer />
		</Router>
	);
}

export default App;
