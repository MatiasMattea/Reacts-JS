import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          🛍️ Ecommers
        </a>
        
        <div className="navbar-nav me-auto">
          <a className="nav-link" href="#">Inicio</a>
          <a className="nav-link" href="#">Productos</a>
          <a className="nav-link" href="#">Ofertas</a>
          <a className="nav-link" href="#">Contacto</a>
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;