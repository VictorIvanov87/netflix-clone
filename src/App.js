import './App.css';
import Row from './components/Row';
import endpoints from './endpoints';

function App() {
  return (
    <div className="App">
		{endpoints.map((endpoint, i) => {
			return(<Row title={endpoint.title} fetchUrl={endpoint.fetchUrl} isLargeRow={endpoint.isLargeRow} key={i}/>)	
		})}
    </div>
  );
}

export default App;
