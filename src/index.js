import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
// import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

axios.defaults.baseURL = process.env.REACT_APP_IMDB_BASE_URL;

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
