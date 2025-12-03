import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulamos una llamada asíncrona
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const products = [
          { id: 1, title: "Producto 1", price: 100, description: "Descripción del producto 1", image: "/placeholder.jpg", category: "cascos" },
          { id: 2, title: "Producto 2", price: 200, description: "Descripción del producto 2", image: "/placeholder.jpg", category: "clothing" },
          { id: 3, title: "Producto 3", price: 300, description: "Descripción del producto 3", image: "/placeholder.jpg", category: "electronics" }
        ];
        const foundProduct = products.find(p => p.id === parseInt(id));
        resolve(foundProduct);
      }, 1000);
    });

    getProduct.then(result => {
      setProduct(result);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
