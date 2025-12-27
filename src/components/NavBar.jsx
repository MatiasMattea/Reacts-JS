import React from 'react';
import { Link } from 'react-router-dom'; 
import { useCart } from '../context/useCart';

function NavBar() {
  const { totalUnidades } = useCart();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          🚒 M2M TIENDA DE BOMBEROS
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/category/cascos" className="nav-link">Cascos</Link>
          <Link to="/category/ropa" className="nav-link">Ropa</Link>
          <Link to="/category/guantes" className="nav-link">Guantes</Link>
          <Link to="/products" className="nav-link">Todos</Link>
        </div>
        
        <Link to="/cart" className="nav-link">
          🛒 Carrito
          {totalUnidades > 0 && (
            <span style={{
              backgroundColor: 'white',
              color: 'rgba(211, 47, 47, 1)',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              marginLeft: '5px'
            }}>
              {totalUnidades}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;