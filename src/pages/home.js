import React from 'react';
import {
	JumbotronContainer,
	FooterContainer,
	FaqsContainer,
} from '../containers';

function Home() {
	return (
		<div>
			<FaqsContainer />
			<JumbotronContainer />
			<FooterContainer />
		</div>
	);
}

export default Home;
