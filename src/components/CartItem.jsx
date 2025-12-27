// src/components/CartItem.jsx - VERSIÓN SEGURA
import React from 'react';
import { useCart } from '../context/useCart';

const CartItem = ({ item }) => {
  const { eliminarDelCarrito } = useCart();
  
  // Validar que el item tenga los datos necesarios
  if (!item) {
    return (
      <div className="cart-item alert alert-warning">
        <p>Producto no disponible</p>
      </div>
    );
  }
  
  const { id, titulo, nombre, precio, cantidad, imagen } = item;
  const nombreProducto = titulo || nombre || 'Producto sin nombre';
  const precioProducto = precio || 0;
  const cantidadProducto = cantidad || 1;
  const subtotal = precioProducto * cantidadProducto;
  
  return (
    <div className="cart-item border-bottom py-3">
      <div className="row align-items-center">
        {/* Imagen */}
        <div className="col-md-2">
          <img 
            src={imagen || 'https://via.placeholder.com/100x100?text=Producto'} 
            alt={nombreProducto}
            className="img-fluid rounded"
            style={{ maxHeight: '100px', objectFit: 'cover' }}
          />
        </div>
        
        {/* Nombre */}
        <div className="col-md-4">
          <h5 className="mb-1">{nombreProducto}</h5>
          <p className="text-muted mb-0">ID: {id || 'N/A'}</p>
        </div>
        
        {/* Precio unitario */}
        <div className="col-md-2">
          <p className="mb-0">
            <strong>Precio:</strong><br />
            ${precioProducto.toLocaleString()}
          </p>
        </div>
        
        {/* Cantidad */}
        <div className="col-md-2">
          <p className="mb-0">
            <strong>Cantidad:</strong><br />
            {cantidadProducto}
          </p>
        </div>
        
        {/* Subtotal */}
        <div className="col-md-1">
          <p className="mb-0 text-danger">
            <strong>Subtotal:</strong><br />
            ${subtotal.toLocaleString()}
          </p>
        </div>
        
        {/* Eliminar */}
        <div className="col-md-1 text-end">
          <button 
            onClick={() => eliminarDelCarrito(id)}
            className="btn btn-outline-danger btn-sm"
            title="Eliminar producto"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;