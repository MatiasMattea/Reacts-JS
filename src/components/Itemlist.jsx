import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            {}
            <div className="image-container" style={{ 
              height: "250px", 
              overflow: "hidden",
              backgroundColor: "rgba(248, 249, 250, 1)"
            }}>
              <img 
                src={product.image || "https://via.placeholder.com/300x250"} 
                className="card-img-top"
                alt={product.title}
                style={{ 
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                  display: "block"
                }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x250/6c757d/ffffff?text=Sin+imagen";
                }}
              />
            </div>
            
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text text-muted">{product.description}</p>
              <p className="card-text fw-bold fs-4 text-primary">${product.price}</p>
              <div className="mt-auto">
                <Link to={`/item/${product.id}`} className="btn btn-primary w-100">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;