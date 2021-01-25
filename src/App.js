import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import Jumbotron from './components/Jumbotron';
import endpoints from './endpoints';
import jumboData from './fixtures/jumbo.json';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Jumbotron.Container>
				{jumboData.map((item) => {
					return (
						<Jumbotron key={item.id} direction={item.direction}>
							<p>{item.title}</p>
							<p>{item.subTitle}</p>
							<p>{item.alt}</p>
							<p>{item.image}</p>
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

export default App;
