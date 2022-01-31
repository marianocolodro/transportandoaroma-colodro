import './css/main.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NoPage from'./components/NoPage';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="*" element= {<NoPage/>}/>
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
