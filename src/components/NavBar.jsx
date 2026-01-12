import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          🚒 M2M TIENDA PARA BOMBEROS
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">🏠 Inicio</Link>
          <Link to="/products" className="nav-link"> Productos</Link>
          <Link to="/category/cascos" className="nav-link"> Cascos</Link>
          <Link to="/category/ropa" className="nav-link"> Ropa</Link>
          <Link to="/category/guantes" className="nav-link"> Guantes</Link>
          
          <CartWidget />
          
          <div className="bandera-argentina" title="Argentina"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;