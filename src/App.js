import './App.css';
import NavBar from './components/NavBar';
import './css/main.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer />
      <header className="App-header">
        <h1>
          Transportando Aroma
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
