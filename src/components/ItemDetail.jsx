import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
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
        <ItemCount stock={10} initial={1} />
        <button className="btn btn-success mt-3">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;