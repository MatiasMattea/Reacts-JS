import React from 'react';

const ItemList = ({ productos }) => {
  console.log("🛒 ItemList recibió productos:", productos);
  console.log("📊 Tipo de productos:", typeof productos);
  console.log("📊 Es array?", Array.isArray(productos));
  
  // Verificación segura ANTES de usar .map()
  if (!productos || !Array.isArray(productos) || productos.length === 0) {
    console.log("⚠️ No hay productos para mostrar");
    return (
      <div className="text-center py-5">
        <p className="text-muted">No hay productos disponibles</p>
        <p className="text-muted small">
          {!productos ? "productos es null/undefined" : 
           !Array.isArray(productos) ? "productos no es un array" : 
           "El array está vacío"}
        </p>
      </div>
    );
  }

  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-4 mb-4" key={producto.id}>
          {/* Tu código de cada producto aquí */}
          <div className="card">
            <img 
              src={producto.imagen} 
              className="card-img-top" 
              alt={producto.titulo}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.titulo}</h5>
              <p className="card-text">${producto.precio.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;