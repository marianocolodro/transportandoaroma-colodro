import './css/main.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NoPage from'./components/NoPage';
import NavBar from './components/NavBar';

function App() {
  return (
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path= "/producto/:id" element= {<ItemDetailContainer/>}/>
      <Route path="*" element= {<NoPage/>}/>
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
