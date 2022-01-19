import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './css/main.css';
import Itemlistcontainer from './components/Itemlistcontainer';
import Itemcount from './components/Itemcount'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Itemcount />
    <Itemlistcontainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Transportando Aroma
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
