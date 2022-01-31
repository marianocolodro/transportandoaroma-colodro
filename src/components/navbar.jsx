import CartWidget from './CartWidget';
import Image from '../img/velas.png';
import {Link} from 'react-router-dom';
import { NavBar } from 'react-bootstrap';
import Home from './Home';
import Catalogo from './Catálogo';

function NavBar () {
        return (
            <nav className="nav">
            <div>
                <ul className="nav ul">
                <Link to="/Home"><Navbar.Brand href='#home'><img className="logo nav div a img" src= {Image} alt="logo" /></Navbar.Brand></Link>    
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/nosotros.html">Nosotros</a>
                  </li>
                  <li className="nav ul li">
                  <Link to="/Catálogo" href="#catálogo">Catálogo</Link>
                  </li>
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/preguntasfrecuentes.html">Preguntas Frecuentes</a>
                  </li>
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/contacto.html">Contacto</a>
                  </li>
                </ul>
                <CartWidget/>
            </div>
          </nav>
        )
}        

export default NavBar;