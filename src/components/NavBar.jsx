// src/components/NavBar.jsx - COPIA Y PEGA
import React from 'react';
import { Link } from 'react-router-dom';  // ← IMPORTA Link
import { useCart } from '../context/useCart';

function NavBar() {
  const { totalUnidades } = useCart();

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo - Link a home */}
        <Link to="/" className="navbar-brand">
          🚒 Equipo Bomberos
        </Link>
        
        {/* Navegación - TODOS Links, NO <a> */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/category/cascos" className="nav-link">Cascos</Link>
          <Link to="/category/ropa" className="nav-link">Ropa</Link>
          <Link to="/category/guantes" className="nav-link">Guantes</Link>
          <Link to="/products" className="nav-link">Todos</Link>
        </div>
        
        {/* Carrito - Link */}
        <Link to="/cart" className="nav-link">
          🛒 Carrito
          {totalUnidades > 0 && (
            <span style={{
              backgroundColor: 'white',
              color: '#d32f2f',
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