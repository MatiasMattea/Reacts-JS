import { useContext } from 'react';
import { CartContext } from './CartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  
  const { carrito = [], total = 0, totalUnidades = 0, ...rest } = context;
  
  return {
    carrito: Array.isArray(carrito) ? carrito : [],
    total: typeof total === 'number' ? total : 0,
    totalUnidades: typeof totalUnidades === 'number' ? totalUnidades : 0,
    cantidadTotal: totalUnidades, 
    ...rest
  };
};