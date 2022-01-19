import Cartwidget from "./Cartwidget";

function Navbar () {
        return (
            <nav className="nav">
            <div>
                <ul className="nav ul">
                <img className="nav div a img" src="../img/velas.png" alt="logo" />    
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
                 <Cartwidget />
            </div>
          </nav>
        )
}        

export default Navbar;