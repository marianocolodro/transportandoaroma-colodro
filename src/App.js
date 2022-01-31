import './css/main.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NoPage from'./components/NoPage';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Catalogo from './components/Catalogo';

function App() {
  return (
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" index element= {<Home/>}/>
      <Route path="/Catalogo" element= {<Catalogo/>}/>
      <Route path="*" element= {<NoPage/>}/>
      <Route path="/producto/:id" element= {<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
