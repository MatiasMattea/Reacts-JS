import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  const { actualizarCantidad, eliminarDelCarrito } = useCart();
  
  const subtotal = item.price * item.cantidad;

  const aumentarCantidad = () => {
    actualizarCantidad(item.id, item.cantidad + 1);
  };

  const disminuirCantidad = () => {
    actualizarCantidad(item.id, item.cantidad - 1);
  };

  return (
    <div className="cart-item mb-3 p-3 border rounded">
      <div className="row align-items-center">
        <div className="col-md-2">
          <img 
            src={item.image} 
            alt={item.title}
            className="img-fluid rounded"
            style={{ height: '80px', objectFit: 'contain' }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/80x80/cccccc/333333?text=Producto";
            }}
          />
        </div>
        
        <div className="col-md-5">
          <h5 className="mb-1">
            <Link to={`/item/${item.id}`} className="text-decoration-none">
              {item.title}
            </Link>
          </h5>
          <p className="text-muted small mb-0">Categoría: {item.category}</p>
          <p className="text-muted small mb-0">Precio unitario: ${item.price.toLocaleString()}</p>
        </div>
        
        <div className="col-md-3">
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-secondary btn-sm"
              onClick={disminuirCantidad}
              disabled={item.cantidad <= 1}
            >
              -
            </button>
            <span className="mx-2">{item.cantidad}</span>
            <button 
              className="btn btn-outline-secondary btn-sm"
              onClick={aumentarCantidad}
            >
              +
            </button>
          </div>
          <button 
            className="btn btn-link btn-sm text-danger mt-1 p-0"
            onClick={() => eliminarDelCarrito(item.id)}
          >
            Eliminar
          </button>
        </div>
        
        <div className="col-md-2 text-end">
          <p className="fw-bold mb-0">${subtotal.toLocaleString()}</p>
          <p className="text-muted small mb-0">
            ${item.price.toLocaleString()} c/u
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;