import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

function Category() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Categoría: {id}</h1>
      <ItemListContainer greeting={`Productos de ${id}`} />
    </div>
  );
}

export default Category;