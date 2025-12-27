import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail"; 
import { obtenerProductoPorId } from '../services/productosService';

const ItemDetailContainer = () => {
  console.log("ItemDetailContainer MONTADO");
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(" ID del producto:", id);

  useEffect(() => {
    console.log(" useEffect ejecutado con id:", id);
    
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      
      try {
        console.log(" Llamando a obtenerProductoPorId con:", id);
        const productData = await obtenerProductoPorId(id);
        console.log(" Datos recibidos:", productData);
        
        if (productData) {
          setProduct(productData);
        } else {
          throw new Error("Producto no encontrado");
        }
      } catch (err) {
        setError(true);
        console.error("Error al cargar producto:", err);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProduct();
    } else {
      console.log("ID es undefined, mostrando error");
      setError(true);
      setLoading(false);
    }
  }, [id]);

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
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">¡Producto no encontrado!</h4>
          <p>El producto que buscas no existe o ha sido removido.</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigate('/')}
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  console.log(" Enviando producto a ItemDetail:", product);

  return (
    <div className="container mt-4">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;