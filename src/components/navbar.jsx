import CartWidget from "./CartWidget";
import Image from "../img/velas.png";

function NavBar () {
        return (
            <nav className="nav">
            <div>
                <ul className="nav ul">
                <img className="logo nav div a img" src= {Image} alt="logo" />    
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/nosotros.html">Nosotros</a>
                  </li>
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/productos">Productos</a>
                  </li>
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/preguntasfrecuentes.html">Preguntas Frecuentes</a>
                  </li>
                  <li className="nav ul li">
                    <a className="nav ul li a textNav" href="../html/contacto.html">Contacto</a>
                  </li>
                </ul>
                <CartWidget />
            </div>
          </nav>
        )
}        

export default NavBar;