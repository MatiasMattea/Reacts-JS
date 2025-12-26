import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, vaciarCarrito, precioTotal, cantidadTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-body text-center py-5">
            <h2 className="card-title mb-4">🛒 Tu carrito está vacío</h2>
            <p className="card-text text-muted mb-4">
              No hay productos en tu carrito de compras.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">🛒 Carrito de Compras</h1>
      
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow mb-4">
            <div className="card-body">
              <h3 className="card-title mb-4">Productos ({cantidadTotal})</h3>
              
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              
              <div className="mt-4">
                <button 
                  className="btn btn-outline-danger"
                  onClick={vaciarCarrito}
                >
                  Vaciar carrito
                </button>
                <Link to="/" className="btn btn-outline-primary ms-2">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title mb-4">Resumen de compra</h3>
              
              <div className="mb-3">
                <p className="d-flex justify-content-between">
                  <span>Productos ({cantidadTotal}):</span>
                  <span>${precioTotal.toLocaleString()}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Envío:</span>
                  <span className="text-success">Gratis</span>
                </p>
                <hr />
                <p className="d-flex justify-content-between fs-5 fw-bold">
                  <span>Total:</span>
                  <span>${precioTotal.toLocaleString()}</span>
                </p>
              </div>
              
              <div className="d-grid gap-2">
                <Link to="/checkout" className="btn btn-success btn-lg">
                  Finalizar compra
                </Link>
                <button 
                  className="btn btn-outline-danger"
                  onClick={vaciarCarrito}
                >
                  Vaciar carrito
                </button>
              </div>
              
              <div className="mt-4">
                <p className="text-muted small">
                  <i className="bi bi-shield-check me-1"></i>
                  Compra 100% segura
                </p>
                <p className="text-muted small">
                  <i className="bi bi-truck me-1"></i>
                  Envío a todo el país
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;