// src/components/ItemDetail.jsx - Adaptado para tus productos
import React, { useState } from 'react';
import { useCart } from '../context/useCart';

function ItemDetail({ producto }) {
  const { agregarAlCarrito } = useCart();
  const [cantidad, setCantidad] = useState(1);

  // Función para manejar agregar
  const handleAgregar = () => {
    if (!producto) return;
    
    // Crear objeto compatible con el carrito
    const productoParaCarrito = {
      id: producto.id,
      nombre: producto.titulo,  // ← Usamos "titulo" como "nombre"
      precio: producto.precio,
      imagen: producto.imagen,
      descripcion: producto.descripcion,
      stock: producto.stock
    };
    
    agregarAlCarrito(productoParaCarrito, cantidad);
    alert(`Agregaste ${cantidad} ${producto.titulo} al carrito`);
  };

  // Controlar cantidad máxima (no superar stock)
  const handleCantidadChange = (nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    if (nuevaCantidad > producto.stock) {
      alert(`Solo hay ${producto.stock} unidades disponibles`);
      return;
    }
    setCantidad(nuevaCantidad);
  };

  return (
    <div className="producto-detalle">
      <img 
        src={producto.imagen} 
        alt={producto.titulo}
        style={{ width: '300px', borderRadius: '10px' }}
      />
      <h2>{producto.titulo}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>Precio: ${producto.precio.toLocaleString()}</strong></p>
      <p>Stock disponible: {producto.stock}</p>
      
      {/* Selector de cantidad */}
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={() => handleCantidadChange(cantidad - 1)}
          style={{ padding: '5px 15px', marginRight: '10px' }}
        >
          -
        </button>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {cantidad}
        </span>
        <button 
          onClick={() => handleCantidadChange(cantidad + 1)}
          style={{ padding: '5px 15px', marginLeft: '10px' }}
        >
          +
        </button>
      </div>
      
      {/* Botón agregar */}
      <button 
        onClick={handleAgregar}
        disabled={producto.stock === 0}
        style={{
          backgroundColor: producto.stock > 0 ? '#d32f2f' : '#ccc',
          color: 'white',
          padding: '12px 30px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: producto.stock > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        {producto.stock > 0 ? 'AGREGAR AL CARRITO' : 'SIN STOCK'}
      </button>
    </div>
  );
}

export default ItemDetail;