import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">TIENDA DE QUIPOS PARA BOMBEROS</h1>
      <p className="lead mb-5">
        Encuentra todo el equipamiento certificado necesario para bomberos
      </p>
      
      <div className="row mb-5">
        <div className="col-md-4 mb-3">
          <Link to="/category/cascos" className="btn btn-danger btn-lg w-100 py-3">
             Cascos
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/category/ropa" className="btn btn-danger btn-lg w-100 py-3">
             Ropa
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/category/guantes" className="btn btn-danger btn-lg w-100 py-3">
             Guantes
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/category/botas" className="btn btn-danger btn-lg w-100 py-3">
             botas
          </Link>
        </div>
      </div>
      
      
      
      <div className="mt-5">
        <Link to="/products" className="btn btn-outline-danger btn-lg">
          Ver todos los productos
        </Link>
      </div>
    </div>
  );
};

export default Home;