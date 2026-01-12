import React, { createContext, useState, useEffect } from 'react';
import { products } from '../services/productosService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    const productoId = producto.id;
    
    const productoOriginal = products.find(p => 
      p.id.toString() === productoId.toString() ||  
      (parseInt(productoId) && p.id === parseInt(productoId))  
    );
    
    if (!productoOriginal) {
      console.log(' Producto no encontrado en products array');
      console.log('ID buscado:', productoId);
      console.log('Tipo ID:', typeof productoId);
      console.log('Products disponibles:', products.map(p => ({id: p.id, tipo: typeof p.id})));
      
      const productoSinStock = {
        id: producto.id,
        titulo: producto.nombre || producto.titulo || 'Producto',
        precio: producto.precio || 0,
        stock: producto.stock || 10,
        imagen: producto.imagen || '',
        descripcion: producto.descripcion || '',
        categoria: producto.categoria || ''
      };
      
      console.log(' Usando producto recibido (sin control de stock):', productoSinStock);
      
      setCarrito(prevCarrito => {
        const existe = prevCarrito.find(item => item.id === productoId);
        
        if (existe) {
          return prevCarrito.map(item =>
            item.id === productoId
              ? { ...item, cantidad: item.cantidad + cantidad }
              : item
          );
        } else {
          return [...prevCarrito, { 
            id: productoId,
            titulo: producto.nombre || producto.titulo,
            precio: producto.precio,
            imagen: producto.imagen,
            descripcion: producto.descripcion,
            categoria: producto.categoria,
            cantidad: cantidad,
            nombre: producto.nombre || producto.titulo
          }];
        }
      });
      
      setTimeout(() => {
        alert(`✅ ¡Agregaste ${cantidad} ${producto.nombre || producto.titulo} al carrito!`);
      }, 100);
      return;
    }
    
    if (productoOriginal.stock < cantidad) {
      alert(`❌ Stock insuficiente. Solo quedan ${productoOriginal.stock} unidades`);
      return;
    }
    
    productoOriginal.stock -= cantidad;
    console.log(` Stock actualizado: ${productoOriginal.titulo} - Nuevo stock: ${productoOriginal.stock}`);
    
    setCarrito(prevCarrito => {
      const existe = prevCarrito.find(item => item.id === productoId);
      
      if (existe) {
        return prevCarrito.map(item =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prevCarrito, { 
          id: productoId,
          titulo: producto.titulo || productoOriginal.titulo,
          precio: producto.precio || productoOriginal.precio,
          imagen: producto.imagen || productoOriginal.imagen,
          descripcion: producto.descripcion || productoOriginal.descripcion,
          categoria: producto.categoria || productoOriginal.categoria,
          cantidad: cantidad,
          nombre: producto.titulo || productoOriginal.titulo
        }];
      }
    });
    
    setTimeout(() => {
      alert(`✅ ¡Agregaste ${cantidad} ${productoOriginal.titulo} al carrito!`);
    }, 100);
  };

  const eliminarDelCarrito = (id) => {
    const productoId = id;
    const productoEliminado = carrito.find(item => item.id === productoId);
    
    if (productoEliminado) {
      const productoOriginal = products.find(p => 
        p.id.toString() === productoId.toString() ||
        (parseInt(productoId) && p.id === parseInt(productoId))
      );
      if (productoOriginal) {
        productoOriginal.stock += productoEliminado.cantidad;
        console.log(`↩️ Stock restaurado: ${productoOriginal.titulo} +${productoEliminado.cantidad} = ${productoOriginal.stock}`);
      }
    }
    
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productoId));
  };

  const vaciarCarrito = () => {
    carrito.forEach(item => {
      const productoOriginal = products.find(p => 
        p.id.toString() === item.id.toString() ||
        (parseInt(item.id) && p.id === parseInt(item.id))
      );
      if (productoOriginal) {
        productoOriginal.stock += item.cantidad;
        console.log(`↩️ Stock restaurado: ${productoOriginal.titulo} +${item.cantidad} = ${productoOriginal.stock}`);
      }
    });
    
    setCarrito([]);
  };

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