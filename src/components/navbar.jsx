function Navbar () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <img src="../img/velas" alt="logo" />    
                  <li className="nav-item">
                    <link to="../html/nosotros.html">Nosotros</link>
                  </li>
                  <li className="nav-item">
                    <link to="../html/productos">Productos</link>
                  </li>
                  <li className="nav-item">
                    <link to="../html/preguntasfrecuentes.html">Preguntas Frecuentes</link>
                  </li>
                  <li className="nav-item">
                    <link to="../html/contacto.html">Contacto</link>
                  </li>
                </ul>
                <Link to="/cart">
                 <CartWidget />
                </Link>
            </div>
          </nav>
        )
}        

export default Navbar;