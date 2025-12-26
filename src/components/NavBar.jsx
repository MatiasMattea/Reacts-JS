import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🛍️ Mi Tienda
        </Link>
        
        <div className="navbar-nav me-auto">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/category/cascos">Cascos</Link>
          <Link className="nav-link" to="/category/ropa">Ropa</Link>
          <Link className="nav-link" to="/category/guantes">Guantes</Link>
          <Link className="nav-link" to="/category">Todas las categorías</Link>
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;