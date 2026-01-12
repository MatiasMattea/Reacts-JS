import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd, showAddButton = true }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [agregado, setAgregado] = useState(false);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(cantidad);
      setAgregado(true);
    }
  };

  if (stock <= 0) {
    return (
      <div className="alert alert-danger">
        <i className="bi bi-exclamation-triangle me-2"></i>
        Producto sin stock
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="me-3 mb-0">Cantidad:</h5>
        <div className="btn-group" role="group">
          <button 
            className="btn btn-outline-secondary"
            onClick={disminuir}
            disabled={cantidad <= 1}
          >
            -
          </button>
          <span className="btn btn-light" style={{ minWidth: '50px' }}>
            {cantidad}
          </span>
          <button 
            className="btn btn-outline-secondary"
            onClick={aumentar}
            disabled={cantidad >= stock}
          >
            +
          </button>
        </div>
      </div>

      {showAddButton && !agregado && (
        <button 
          className="btn btn-danger w-100"
          onClick={handleAdd}
        >
          Agregar al carrito
        </button>
      )}

      {agregado && (
        <div className="alert alert-success">
          <i className="bi bi-check-circle me-2"></i>
          ¡Agregado al carrito!
        </div>
      )}
    </div>
  );
};

export default ItemCount;