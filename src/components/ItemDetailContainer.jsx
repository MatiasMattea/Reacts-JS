import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemList from "./ItemList";
import ItemDetail from './ItemDetail';
import { obtenerProductoPorId } from '../services/productosService';

const ItemDetailContainer = () => {
  console.log("ItemDetailContainer MONTADO");
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("📌 ID del producto:", id);

  useEffect(() => {
    console.log(" useEffect ejecutado con id:", id);
    
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      
      try {
        console.log(" Llamando a obtenerProductoPorId con:", id);
        const productData = await obtenerProductoPorId(id);
        console.log(" Datos recibidos:", productData);
        
        if (productData && productData.id) {  
          setProduct(productData);
          setError(false);  
        } else {
          console.log(" ProductData es null o no tiene ID");
          setError(true);
        }
      } catch (err) {
        console.error(" Error al cargar producto:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    if (id && id !== 'undefined' && id !== 'null') {
      fetchProduct();
    } else {
      console.log(" ID es inválido:", id);
      setError(true);
      setLoading(false);
    }
  }, [id]);

  if (product && !loading && !error) {
    console.log(" Enviando producto a ItemDetail:", product);
    return (
      <div className="container mt-4">
        <ItemDetail product={product} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">¡Atención!</h4>
          <p>No se pudo cargar el producto en este momento.</p>
          <div className="mt-3">
            <button 
              className="btn btn-primary me-2"
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>
            <button 
              className="btn btn-outline-primary"
              onClick={() => navigate('/products')}
            >
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ItemDetailContainer;