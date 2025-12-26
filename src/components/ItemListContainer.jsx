import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { obtenerProductos } from '../services/productosService';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log("🔄 ItemListContainer montado");

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError(false);
      
      try {
        console.log("📡 Llamando a obtenerProductos...");
        const data = await obtenerProductos();
        console.log("📦 Productos obtenidos:", data);
        
        // Asegúrate de que sea un array
        if (data && Array.isArray(data)) {
          setProductos(data);
        } else {
          console.error("❌ Datos no son un array:", data);
          setProductos([]);
        }
      } catch (err) {
        console.error("💥 Error al cargar productos:", err);
        setError(true);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-danger">
          <h4>Error al cargar productos</h4>
          <p>No se pudieron cargar los productos. Intenta de nuevo más tarde.</p>
        </div>
      </div>
    );
  }

  console.log("📤 Enviando productos a ItemList:", productos);

  return (
    <div className="container mt-4">
      <h1>Catálogo de Productos</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;