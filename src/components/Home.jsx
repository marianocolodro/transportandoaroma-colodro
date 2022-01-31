import '../css/main.css';
import ItemListContainer from './ItemListContainer';

function Home() {
  return (
    <div className="App">
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

export default Home;

