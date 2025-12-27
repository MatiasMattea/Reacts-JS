import React from 'react';
import ItemListContainer from '../components/ItemListContainer';

const Products = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Todos los Productos</h1>
      <ItemListContainer />
    </div>
  );
};

export default Products;