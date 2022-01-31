import CartWidget from './CartWidget';
import Image from '../img/velas.png';
import {Link, NavLink} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function NavBar () {
        return (
            <nav className="nav">
            <div>
                <ul className="nav ul">
                <Link to='/'><Navbar.Brand href='#Home'><img className="logo nav div a img" src={Image} alt="logo" /></Navbar.Brand></Link>    
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/nosotros.html">Nosotros</a>
                  </li>
                  <li className="nav ul li">
                  <NavLink to='/Catalogo' href="#Catalogo">Catálogo</NavLink>
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