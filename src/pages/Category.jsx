import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

function Category() {
  const { id } = useParams();  // ← OBTIENE "cascos", "ropa", etc.
  
  return (
    <div>
      <h1>Categoría: {id}</h1>
      {/* Pasa la categoría al ItemListContainer */}
      <ItemListContainer greeting={`Productos de ${id}`} />
    </div>
  );
}

export default Category;