import React, { createContext, useState, useContext } from 'react';

// Crear el Context
const CartContext = createContext();

// Hook personalizado para usar el Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

// Proveedor del Context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    setCart((cartActual) => {
      // Verificar si el producto ya está en el carrito
      const productoExistente = cartActual.find(item => item.id === producto.id);
      
      if (productoExistente) {
        // Si existe, actualizar cantidad
        return cartActual.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // Si no existe, agregar nuevo
        return [...cartActual, { ...producto, cantidad }];
      }
    });
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Actualizar cantidad de un producto
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      ));
    }
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCart([]);
  };

  // Calcular cantidad total de items
  const cantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);

  // Calcular precio total
  const precioTotal = cart.reduce((total, item) => total + (item.price * item.cantidad), 0);

  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrito,
      eliminarDelCarrito,
      actualizarCantidad,
      vaciarCarrito,
      cantidadTotal,
      precioTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};