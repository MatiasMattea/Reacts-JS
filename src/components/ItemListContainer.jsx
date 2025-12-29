import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList.jsx";
import { obtenerProductos, obtenerProductosPorCategoria } from '../services/productosService';

const ItemListContainer = ({ greeting }) => {

  const { id } = useParams();
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('DEBUG - Componente ItemListContainer montado');
  console.log('DEBUG - Parámetro id recibido:', id);
  console.log('DEBUG - Parámetro greeting:', greeting);

  useEffect(() => {
    console.log('DEBUG - useEffect ejecutándose con id:', id);
    
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (id) {
          console.log('DEBUG - Filtrando por categoría:', id);
        } else {
          console.log('DEBUG - Mostrando todos los productos');
        }
        
        const data = id 
          ? await obtenerProductosPorCategoria(id)
          : await obtenerProductos();
        
        if (!controller.signal.aborted) {
          console.log('DEBUG - Productos recibidos:', data.length, 'productos');
          console.log('DEBUG - Primer producto:', data[0]);
          
          setProductos(data);
          setLoading(false);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('ERROR - Al obtener productos:', error);
          setError('Error al cargar los productos');
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      controller.abort();
    };
  }, [id]);

  if (error) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger">
          <h4>Error</h4>
          <p>{error}</p>
          <a href="/" className="btn btn-primary">Volver al inicio</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Título */}
      <h1 className="mb-4">
        {id 
          ? `Categoría: ${id.charAt(0).toUpperCase() + id.slice(1)}`
          : (greeting || 'Todos los productos')
        }
      </h1>
      
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-danger" style={{width: '3rem', height: '3rem'}}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando productos...</p>
        </div>
      )}
      
      {!loading && productos.length === 0 && (
        <div className="text-center py-5">
          <h3>No se encontraron productos</h3>
          <p className="text-muted">
            {id 
              ? `No hay productos en la categoría "${id}"`
              : 'No hay productos disponibles'
            }
          </p>
          <a href="/products" className="btn btn-primary">Ver todos los productos</a>
        </div>
      )}
      
      {!loading && productos.length > 0 && (
        <div>
          <p className="text-muted mb-4">
            Mostrando {productos.length} producto{productos.length !== 1 ? 's' : ''}
            {id && ` en la categoría "${id}"`}
          </p>
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;