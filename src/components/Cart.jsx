// src/components/Cart.jsx - VERSIÓN QUE SÍ FUNCIONA
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import CartItem from './CartItem';

const Cart = () => {
  // OBTENER EL CARRITO CORRECTAMENTE
  const { carrito, total, vaciarCarrito } = useCart();
  
  // DEBUG: Ver qué tenemos
  console.log('Cart - carrito:', carrito);
  console.log('Cart - total:', total);
  console.log('Cart - carrito.length:', carrito ? carrito.length : 'undefined');
  
  // Si carrito es undefined o null, mostrar error
  if (!carrito) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-danger">
          <h4>Error en el carrito</h4>
          <p>No se pudo cargar el carrito. Intenta recargar la página.</p>
          <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
      </div>
    );
  }
  
  // Si el carrito está vacío (es un array vacío)
  if (carrito.length === 0) {
    return (
      <div className="container text-center py-5">
        <div className="card shadow-sm border-0" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="card-body py-5">
            <h2 className="text-muted mb-4">🛒 Tu carrito está vacío</h2>
            <p className="text-muted mb-4">Agrega algunos productos para verlos aquí</p>
            <Link to="/products" className="btn btn-danger btn-lg">
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Calcular total si no viene calculado
  const totalCalculado = total !== undefined ? total : 
    carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Tu Carrito</h1>
      
      {/* Lista de productos */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          {carrito.map((item, index) => (
            <CartItem 
              key={item.id || index} 
              item={item} 
            />
          ))}
        </div>
      </div>
      
      {/* Resumen */}
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h4>Resumen de compra</h4>
              <p>Productos: {carrito.length}</p>
              <p>Total items: {carrito.reduce((sum, item) => sum + item.cantidad, 0)}</p>
            </div>
            <div className="col-md-6 text-end">
              <h3 className="text-danger">Total: ${totalCalculado.toLocaleString()}</h3>
            </div>
          </div>
          
          {/* Acciones */}
          <div className="d-flex gap-3 mt-4">
            <button 
              onClick={vaciarCarrito}
              className="btn btn-outline-danger"
            >
              Vaciar carrito
            </button>
            
            <Link 
              to="/products" 
              className="btn btn-outline-primary"
            >
              Seguir comprando
            </Link>
            
            <Link 
              to="/checkout" 
              className="btn btn-danger ms-auto"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;