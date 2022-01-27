import './App.css';
import NavBar from './components/NavBar';
import './css/main.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer />
    <Item />
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
      <ItemCount />
    </div>
  );
}

export default App;
