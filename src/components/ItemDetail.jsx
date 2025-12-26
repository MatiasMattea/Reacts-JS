import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext'; // Importar Context

const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false); // Estado para ocultar contador
  const { agregarAlCarrito } = useCart(); // Usar Context

  const manejarAgregarAlCarrito = () => {
    agregarAlCarrito(product, cantidad); // Agregar al carrito global
    setAgregado(true); // Ocultar contador
    alert(`✅ Agregaste ${cantidad} unidad(es) de "${product.title}" al carrito`);
  };

  const manejarCambioCantidad = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
  };

  if (!product) {
    return <div className="text-center">Cargando producto...</div>;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid" alt={product.title} />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p className="text-muted">{product.description}</p>
        <p className="h4 text-primary">${product.price}</p>
        
        {/* MOSTRAR CONTADOR O MENSAJE DE AGREGADO */}
        {!agregado ? (
          <>
            <ItemCount 
              stock={10} 
              cantidadInicial={1} 
              alCambiarCantidad={manejarCambioCantidad} 
            />
            <button 
              className="btn btn-success mt-3"
              onClick={manejarAgregarAlCarrito} // ← BOTÓN AQUÍ
            >
              Agregar al carrito
            </button>
          </>
        ) : (
          <div className="alert alert-success mt-3">
            <p>✅ Producto agregado al carrito</p>
            <button className="btn btn-outline-success">
              Ir al carrito
            </button>
            <button 
              className="btn btn-link" 
              onClick={() => setAgregado(false)}
            >
              Agregar más
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;