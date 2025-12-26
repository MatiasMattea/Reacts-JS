import React, { useState } from 'react';

const ItemCount = ({ stockDisponible, cantidadInicial, alCambiarCantidad }) => {
  const [cantidad, setCantidad] = useState(cantidadInicial);

  const aumentar = () => {
    if (cantidad < stockDisponible) {
      const nuevaCantidad = cantidad + 1;
      setCantidad(nuevaCantidad);
      alCambiarCantidad(nuevaCantidad);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      alCambiarCantidad(nuevaCantidad);
    }
  };

  return (
    <div className="contador-producto">
      <div className="grupo-botones-contador" role="group">
        <button 
          className="boton-contador boton-disminuir"
          onClick={disminuir}
          disabled={cantidad <= 1}
        >
          -
        </button>
        <span className="display-cantidad">{cantidad}</span>
        <button 
          className="boton-contador boton-aumentar"
          onClick={aumentar}
          disabled={cantidad >= stockDisponible}
        >
          +
        </button>
      </div>
      <small className="texto-stock">Stock disponible: {stockDisponible}</small>
    </div>
  );
};

export default ItemCount;