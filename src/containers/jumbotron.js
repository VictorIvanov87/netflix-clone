import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import endpoints from '../endpoints';
import { Jumbotron, Banner, Navbar, Row } from '../components';

function JumbotronContainer() {
	return (
		<div>
			<Navbar />
			<Jumbotron.Container>
				{jumboData.map((item) => {
					return (
						<Jumbotron key={item.id} direction={item.direction}>
							<Jumbotron.Pane>
								<Jumbotron.Title>{item.title}</Jumbotron.Title>
								<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
							</Jumbotron.Pane>
							<Jumbotron.Pane>
								<Jumbotron.Image
									src={item.image}
									alt={item.alt}
								></Jumbotron.Image>
							</Jumbotron.Pane>
						</Jumbotron>
					);
				})}
			</Jumbotron.Container>
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
		</div>
	);
}

export default JumbotronContainer;
