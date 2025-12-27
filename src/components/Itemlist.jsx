import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {

  const isDevelopment = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1';
  
  if (isDevelopment) {
    console.log("🛒 ItemList recibió productos:", productos);
    console.log("📊 Tipo de productos:", typeof productos);
    console.log("📊 Es array?", Array.isArray(productos));
    console.log("📊 Cantidad de productos:", productos?.length || 0);
  }


  if (!productos || !Array.isArray(productos) || productos.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-info" role="alert">
          <i className="bi bi-info-circle me-2"></i>
          No hay productos disponibles en esta categoría
        </div>
        <Link to="/" className="btn btn-outline-primary mt-3">
          <i className="bi bi-arrow-left me-2"></i>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {productos.map((producto, index) => {

        if (!producto) return null;
        
        const productId = producto.id || producto._id;
        const productKey = productId || `product-${index}`;
        const productTitle = producto.title || producto.nombre || producto.titulo || "Producto sin nombre";
        const productPrice = producto.price || producto.precio || producto.valor || 0;
        const productCategory = producto.category || producto.categoria || "Sin categoría";
        const productImage = producto.image || producto.imagen || producto.img || "/default-image.png";
        
        const truncatedTitle = productTitle.length > 50 
          ? `${productTitle.substring(0, 50)}...` 
          : productTitle;

        return (
          <div className="col" key={productKey}>
            <div className="card h-100 shadow-sm">
              <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src={productImage}
                  className="card-img-top p-3"
                  alt={productTitle}
                  style={{ 
                    height: '100%', 
                    width: '100%', 
                    objectFit: 'contain',
                    backgroundColor: '#f8f9fa'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="d-flex align-items-center justify-content-center bg-light h-100">
                        <div class="text-center">
                          <span class="text-muted" style="font-size: 3rem;">📷</span>
                          <p class="mt-2 text-muted small">${productTitle}</p>
                        </div>
                      </div>
                    `;
                  }}
                  loading="lazy"
                />
                
                {productCategory && (
                  <span className="position-absolute top-0 end-0 m-2">
                    <small className="badge bg-secondary bg-opacity-75 text-white">
                      {productCategory}
                    </small>
                  </span>
                )}
              </div>
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" title={productTitle}>
                  {truncatedTitle}
                </h5>
                
                {producto.description && (
                  <p className="card-text text-muted small flex-grow-1">
                    {producto.description.length > 80
                      ? `${producto.description.substring(0, 80)}...`
                      : producto.description}
                  </p>
                )}
                
                <div className="mt-auto pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 className="text-primary mb-0">
                        ${productPrice.toLocaleString()}
                      </h4>
                      {producto.originalPrice && producto.originalPrice > productPrice && (
                        <small className="text-muted text-decoration-line-through">
                          ${producto.originalPrice.toLocaleString()}
                        </small>
                      )}
                    </div>
                    
                    {producto.stock !== undefined && (
                      <small className={`badge ${producto.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                        {producto.stock > 0 ? `${producto.stock} disponibles` : 'Agotado'}
                      </small>
                    )}
                  </div>
                  
                  <Link 
                    to={`/item/${productId}`}
                    className="btn btn-outline-primary w-100 mt-3"
                  >
                    <span></span> Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;