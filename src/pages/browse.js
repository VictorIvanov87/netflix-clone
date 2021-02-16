import React from 'react';
import endpoints from '../endpoints';
import { Banner, Row, Navbar } from '../components';
import { FooterContainer } from '../containers';

function Browse() {
	return (
		<>
			<Navbar />
			<Banner />
			{endpoints.map((endpoint, i) => {
				return (
					<Row
						title={endpoint.title}
						fetchUrl={endpoint.fetchUrl}
						isLargeRow={endpoint.isLargeRow}
						key={i}
					/>
				);
			})}
			<FooterContainer />
		</>
	);
}

export default Browse;
