import './App.css';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Row from './components/Row';
import endpoints from './endpoints';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Banner />
		{endpoints.map((endpoint, i) => {
			return(<Row title={endpoint.title} fetchUrl={endpoint.fetchUrl} isLargeRow={endpoint.isLargeRow} key={i}/>)	
		})}
    </div>
  );
}

export default App;
