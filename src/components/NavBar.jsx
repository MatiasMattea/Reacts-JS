import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // CIERRA EL MENÚ AL HACER CLIC EN CUALQUIER LADO
  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    // Agrega event listener al documento
    document.addEventListener('click', closeMenu);
    
    // Limpia el event listener
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={(e) => e.stopPropagation()}>
          🚒 M2M TIENDA PARA BOMBEROS
        </Link>
        
        <div className="cart-mobile" onClick={(e) => e.stopPropagation()}>
          <CartWidget />
        </div>
        
        <button 
          className="navbar-toggler"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label="Toggle navigation"
          type="button"
        >
          ☰
        </button>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>🏠 Inicio</Link>
          <Link to="/products" className="nav-link" onClick={() => setMenuOpen(false)}>Productos</Link>
          <Link to="/category/cascos" className="nav-link" onClick={() => setMenuOpen(false)}>Cascos</Link>
          <Link to="/category/ropa" className="nav-link" onClick={() => setMenuOpen(false)}>Ropa</Link>
          <Link to="/category/guantes" className="nav-link" onClick={() => setMenuOpen(false)}>Guantes</Link>
          <Link to="/category/botas" className="nav-link" onClick={() => setMenuOpen(false)}>Botas</Link>
          
          <div className="cart-desktop">
            <CartWidget />
          </div>
          
          <div className="bandera-argentina" title="Argentina"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;