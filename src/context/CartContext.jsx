// src/context/CartContext.jsx - VERSIÓN PARA TUS PRODUCTOS
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // AGREGAR: Adaptado para tus productos (titulo → nombre)
  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito(prevCarrito => {
      const existe = prevCarrito.find(item => item.id === producto.id);
      
      if (existe) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // Convertir "titulo" a "nombre" para consistencia
        return [...prevCarrito, { 
          ...producto, 
          nombre: producto.titulo || producto.nombre, // Usa titulo si no hay nombre
          cantidad 
        }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Calcular total: usa producto.precio
  const total = carrito.reduce((sum, item) => 
    sum + (item.precio * item.cantidad), 0
  );

  const totalUnidades = carrito.reduce((sum, item) => 
    sum + item.cantidad, 0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        total,
        totalUnidades,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };