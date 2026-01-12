import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const { agregarAlCarrito } = useCart();

  if (!product) {
    return (
      <div className="container text-center py-5">
        <div className="card shadow-sm" style={{maxWidth: '500px', margin: '0 auto'}}>
          <div className="card-body py-5">
            <h3 className="text-danger">Producto no encontrado</h3>
            <p className="text-muted">No se pudo cargar el producto</p>
            <Link to="/products" className="btn btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = (cantidadSeleccionada) => {
    const productoParaCarrito = {
      id: product.id,
      nombre: product.titulo || product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      descripcion: product.descripcion,
      stock: product.stock || 0
    };
    
    agregarAlCarrito(productoParaCarrito, cantidadSeleccionada);
     };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 text-center">
              <img 
                src={product.imagen} 
                alt={product.titulo || product.nombre}
                className="img-fluid rounded"
                style={{
                  maxHeight: '400px',
                  objectFit: 'contain',
                  width: '100%'
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x400/FF6B6B/FFFFFF?text=Imagen+no+disponible';
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4 d-flex flex-column">
              <h1 className="mb-3">{product.titulo || product.nombre}</h1>
              
              <div className="mb-4">
                <span className="badge bg-danger fs-6 mb-3">
                  {product.categoria ? 
                    product.categoria.charAt(0).toUpperCase() + product.categoria.slice(1) 
                    : 'Sin categoría'
                  }
                </span>
                
                <p className="text-muted mb-4">{product.descripcion || 'Sin descripción disponible'}</p>
                
                <div className="d-flex align-items-center mb-4">
                  <span className="fs-5 me-2">Stock:</span>
                  <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'} fs-6`}>
                    {product.stock > 0 ? `${product.stock} unidades` : 'Sin stock'}
                  </span>
                </div>
                
                <h2 className="text-danger mb-4">
                  ${product.precio ? product.precio.toLocaleString() : '0'}
                </h2>
              </div>
              
              <div className="mb-4">
                <ItemCount 
                  stock={product.stock || 0}
                  initial={1}
                  onAdd={handleAddToCart}
                  showAddButton={true}
                />
              </div>
              
              <div className="mt-auto">
                <div className="d-flex gap-2">
                  <Link to="/products" className="btn btn-outline-primary flex-grow-1">
                    ← Seguir comprando
                  </Link>
                  <Link to="/cart" className="btn btn-outline-danger flex-grow-1">
                    Ver carrito →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;