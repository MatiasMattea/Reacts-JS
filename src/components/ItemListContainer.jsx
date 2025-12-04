import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        const productsData = [
          { id: 1, title: "Casco Estructural", price: 50000, description: "Casco Bullard", image: "/images/cascobulllard.png", category: "cascos" },
          { id: 2, title: "Casco Estructural", price: 70000, description: "Casco Rosembauer", image: "/images/casco_rosembauer.png", category: "cascos" },
          { id: 3, title: "Casco Estructural", price: 73000, description: "Casco Argent", image: "/images/casco2.png", category: "cascos" },
          { id: 4, title: "Casco Forestal", price: 45800, description: "Casco Sicor", image: "/images/cascoforestal.png", category: "cascos" },
          { id: 5, title: "Casco Forestal", price: 62000, description: "Casco Inforest", image: "/images/cascoforestal1.png", category: "cascos" },
          { id: 6, title: "Traje de Incendio", price: 500000, description: "Estructural MSA", image: "/images/Ropa-msa.png", category: "ropa" },
          { id: 7, title: "Traje de Incendio", price: 800000, description: "Estructural Rosembauer", image: "/images/ropa-rosem.png", category: "ropa" },
          { id: 8, title: "Traje Incendio Forestal", price: 200000, description: "Forestal Inforest", image: "/images/forestal.png", category: "ropa" },
          { id: 9, title: "Traje Incendio Forestal", price: 250000, description: "Forestal Rosembauer", image: "/images/forestal1.png", category: "ropa" },
          { id: 10, title: "Traje Incendio Forestal", price: 80000, description: "Overol Forestal", image: "/images/mamelucoforestal.png", category: "ropa" },
          { id: 11, title: "Guantes de Incendio", price: 30000, description: "Guantes Rosenbauer", image: "/images/Guantes.jpg", category: "guantes" },
          { id: 12, title: "Guantes de Incendio", price: 40000, description: "Guantes Rosenbauer A10", image: "/images/guantesestructurales.png", category: "guantes" },
          { id: 13, title: "Guantes de Incendio Forestal", price: 20000, description: "Guantes Forestales", image: "/images/guantesforetales.png", category: "guantes" },
          { id: 14, title: "Guantes de Incendio Forestal", price: 20000, description: "Guantes Forestales", image: "/images/guantesforetales1.png", category: "guantes" },
        ];
        
        if (category) {
          const filteredProducts = productsData.filter(p => p.category === category);
          resolve(filteredProducts);
        } else {
          resolve(productsData);
        }
      }, 1000);
    });

    getProducts.then(result => {
      setProducts(result);
    });
  }, [category]);

  return (
    <div className="container mt-4">
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">
          {category ? `Categoría: ${category}` : 'Todos los productos'}
        </h1>
        <p className="lead">
          {category 
            ? `Productos de la categoría ${category}` 
            : '¡Encuentra los mejores productos al mejor precio!'}
        </p>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;