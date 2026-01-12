import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { obtenerProductos } from '../services/productosService';
import ItemList from '../components/ItemList';

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(' Location:', location);
    console.log(' Query:', searchQuery);
    
    const buscarProductos = async () => {
      if (!searchQuery.trim()) return;
      
      setLoading(true);
      try {
        const todosProductos = await obtenerProductos();
        console.log('Total productos:', todosProductos.length);
        

        const filtrados = todosProductos.filter(p => 
          p && p.titulo && p.titulo.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        console.log(' Resultados encontrados:', filtrados.length);
        setResultados(filtrados);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    buscarProductos();
  }, [searchQuery, location]);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Buscando "{searchQuery}"...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">
        {searchQuery ? `Resultados para: "${searchQuery}"` : 'Buscar productos'}
      </h1>
      
      {resultados.length === 0 ? (
        <div className="alert alert-warning">
          <h4>No se encontraron productos</h4>
          <p>No hay resultados para "{searchQuery}"</p>
        </div>
      ) : (
        <div>
          <p className="text-muted mb-4">
            {resultados.length} {resultados.length === 1 ? 'producto encontrado' : 'productos encontrados'}
          </p>
          

          <ItemList productos={resultados} />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;