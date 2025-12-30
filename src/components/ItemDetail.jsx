import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

const productosEjemplo = [
  { 
    id: "1", 
    title: "Casco Bullard LTX", 
    price: 50000, 
    description: "Diseñado para ayudar a proteger la cabeza del bombero y el cuello.", 
    image: "/images/cascobulllard.png", 
    category: "cascos",
    stock: 8
  },
  { 
    id: "2", 
    title: "Casco Rosembauer Heros Titan", 
    price: 70000, 
    description: "Es la seguridad de la experiencia. La facilidad que se obtiene del conocimiento y la tecnología. Es la realización de ideas innovadoras", 
    image: "/images/casco_rosembauer.png", 
    category: "cascos",
    stock: 5
  },
  { 
    id: "3", 
    title: "Casco VFR-EVO", 
    price: 73000, 
    description: "El casco Bomberos VFR-EVO cuenta con un sistema de conexión universal de dos puntos para máscaras antigás en los laterales de la calota, ajustable individualmente, lo que lo hace compatible con todas las máscaras del mercado y crea una combinación casco-máscara eficiente y segura.", 
    image: "/images/casco2.png", 
    category: "cascos",
    stock: 10
  },
  { 
    id: "4", 
    title: "Casco Forestal EOM", 
    price: 45800, 
    description: "El casco de protección modelo EOM representa el mejor sistema de protección de la cabeza en extinción de incendios forestales, rescate técnico, rescate en altura y rescate en aguas torrenciales.", 
    image: "/images/cascoforestal.png", 
    category: "cascos",
    stock: 0
  },
  { 
    id: "5", 
    title: "Casco forestal Bullard", 
    price: 62000, 
    description: "Casco de ala completa con estilo sombrero, ideal para brindar seguridad y comodidad al personal de bomberos. Su cómodo diseño termoplástico ofrece una alta resistencia a temperaturas extremas.", 
    image: "/images/cascoforestal1.png", 
    category: "cascos",
    stock: 7
  },
  { 
    id: "6", 
    title: "Chaqueta y Pantalon MSA", 
    price: 500000, 
    description: "El diseño Ergotech Action 2 de MSA Bristol, desarrollado tras una cuidadosa investigación y extensas pruebas con usuarios sobre la ergonomía de las actividades de los bomberos más frecuentes en el día a día, se ha convertido en el estándar por el que se miden los EPP ligeros para bomberos en cuanto a comodidad y rendimiento.", 
    image: "/images/Ropa-msa.png", 
    category: "ropa",
    stock: 4
  },
  { 
    id: "7", 
    title: "Chaqueta y Pantalon Rosembauer", 
    price: 800000, 
    description: "Un traje de protección que parece una segunda piel y que, por lo tanto, puede llevarse durante muchas horas sin que suponga cansancio adicional: ese era el objetivo al diseñar el GAROS G30. Rosenbauer ha implementado muchas de las características del popular traje de bomberos de alta calidad FIRE FLEX. La combinación de corte ergonómico, materiales de alta calidad y peso reducido hace que el GAROS G30 sea la prenda de protección perfecta para todo el personal de los servicios de emergencia cuya función no es la extinción de incendios", 
    image: "/images/ropa-rosem.png", 
    category: "ropa",
    stock: 3
  },
  { 
    id: "8", 
    title: "Estructural forestal", 
    price: 200000, 
    description: "Forestal Inforest", 
    image: "/images/forestal.png", 
    category: "ropa",
    stock: 15
  },
  { 
    id: "9", 
    title: "Estructural forestal", 
    price: 250000, 
    description: "La camisa y pantalón están fabricados en tejido inherentemente ignífugo, tanto la tela como su diseño ofrecen una alta protección y resistencia frente a las llamas. Además, es muy confortable para el usuario aún en una jornada de trabajo intensa.", 
    image: "/images/forestal1.png", 
    category: "ropa",
    stock: 9
  },
  { 
    id: "10", 
    title: "Mameluco forestal", 
    price: 80000, 
    description: "Fabricado en tejido ignífugo de excelente calidad, una tela suave que evita irritaciones, elimina la transpiración y disipa el calor corporal. Diseño ergonómico y reforzado para mayor resistencia y duración ante cualquier esfuerzo.", 
    image: "/images/mamelucoforestal.png", 
    category: "ropa",
    stock: 20
  },
  { 
    id: "11", 
    title: "Guantes de Incendio", 
    price: 30000, 
    description: "El SAFE GRIP 3 combina características de protección maximas con un dinámico diseño. Garantiza protección y comodidad para el bombero profesional. Para ello, los materiales seleccionados se procesan con el mayor cuidado posible. Los guantes de bombero son parte del equipamiento de protección de los bomberos y, por lo tanto, son indispensables durante las intervenciones de combate de incendios e intervenciones técnicas de rescate.", 
    image: "/images/Guantes.jpg", 
    category: "guantes",
    stock: 25
  },
  { 
    id: "12", 
    title: "Guantes de Incendio", 
    price: 40000, 
    description: "Estos cómodos guantes están confeccionados en cuero ignífugo con tratamiento hidrófugo que evita el paso de la humedad externa hacia el interior, manteniendo las manos secas y permitiendo la destreza del bombero.", 
    image: "/images/guantesestructurales.png", 
    category: "guantes",
    stock: 18
  },
  { 
    id: "13", 
    title: "Guantes de Incendio Forestal", 
    price: 20000, 
    description: "Guantes ideales para la protección de trabajos de incendio. Su diseño y material permiten buena destreza y manipulación de elementos, además, están confeccionados en cuero vaqueta que ofrece resistencia y duración en proteger frente a las altas temperaturas.", 
    image: "/images/guantesforetales.png", 
    category: "guantes",
    stock: 30
  },
  { 
    id: "14", 
    title: "Guantes de Incendio Forestal", 
    price: 20000, 
    description: "Guantes ideales para la protección de trabajos de incendio. Su diseño y material permiten buena destreza y manipulación de elementos, además, están confeccionados en cuero vaqueta que ofrece resistencia y duración en proteger frente a las altas temperaturas.", 
    image: "/images/guantesforetales1.png", 
    category: "guantes",
    stock: 0
  }
];

const ItemDetail = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCart();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    console.log("Buscando producto ID:", id);
    
    setTimeout(() => {

      const idNum = parseInt(id);
      const productoEncontrado = productosEjemplo.find(p => p.id === idNum);
      
      console.log("Producto encontrado:", productoEncontrado);
      
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      }
      setLoading(false);
    }, 300);
  }, [id]); 


  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-danger" style={{width: '3rem', height: '3rem'}}>
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando producto...</p>
      </div>
    );
  }


  if (!producto) {
    return (
      <div className="container text-center py-5">
        <div className="card shadow-sm" style={{maxWidth: '500px', margin: '0 auto'}}>
          <div className="card-body py-5">
            <h3 className="text-danger"> Producto no encontrado</h3>
            <p className="text-muted">No se encontró el producto con ID: {id}</p>
            <Link to="/products" className="btn btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAgregar = () => {
    if (!producto) return;
    
    const productoParaCarrito = {
      id: producto.id,
      nombre: producto.titulo,
      precio: producto.precio,
      imagen: producto.imagen,
      descripcion: producto.descripcion,
      stock: producto.stock
    };
    
    agregarAlCarrito(productoParaCarrito, cantidad);
    alert(`✅ ¡Agregaste ${cantidad} ${producto.titulo} al carrito!`);
  };

  const handleCantidadChange = (nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    if (nuevaCantidad > producto.stock) {
      alert(` Solo hay ${producto.stock} unidades disponibles`);
      return;
    }
    setCantidad(nuevaCantidad);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 text-center">
              <img 
                src={producto.imagen} 
                alt={producto.titulo}
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
              <h1 className="mb-3">{producto.titulo}</h1>
              
              <div className="mb-4">
                <span className="badge bg-danger fs-6 mb-3">
                  {producto.categoria?.charAt(0).toUpperCase() + producto.categoria?.slice(1)}
                </span>
                
                <p className="text-muted mb-4">{producto.descripcion}</p>
                
                <div className="d-flex align-items-center mb-4">
                  <span className="fs-5 me-2">Stock:</span>
                  <span className={`badge ${producto.stock > 0 ? 'bg-success' : 'bg-danger'} fs-6`}>
                    {producto.stock > 0 ? `${producto.stock} unidades` : 'Sin stock'}
                  </span>
                </div>
                
                <h2 className="text-danger mb-4">
                  ${producto.precio?.toLocaleString()}
                </h2>
              </div>
              
              {producto.stock > 0 && (
                <div className="mb-4">
                  <label className="form-label fs-5">Cantidad:</label>
                  <div className="d-flex align-items-center" style={{maxWidth: '200px'}}>
                    <button 
                      className="btn btn-outline-danger rounded-circle"
                      onClick={() => handleCantidadChange(cantidad - 1)}
                      disabled={cantidad <= 1}
                      style={{width: '45px', height: '45px'}}
                    >
                      <strong>-</strong>
                    </button>
                    
                    <span className="mx-4 fs-3 fw-bold">{cantidad}</span>
                    
                    <button 
                      className="btn btn-outline-danger rounded-circle"
                      onClick={() => handleCantidadChange(cantidad + 1)}
                      disabled={cantidad >= producto.stock}
                      style={{width: '45px', height: '45px'}}
                    >
                      <strong>+</strong>
                    </button>
                  </div>
                  <small className="text-muted d-block mt-2">
                    Disponible: {producto.stock} unidades
                  </small>
                </div>
              )}
              
              <div className="mt-auto">
                {producto.stock > 0 ? (
                  <button 
                    onClick={handleAgregar}
                    className="btn btn-danger btn-lg w-100 py-3 mb-3"
                  >
                    Agregar al carrito
                  </button>
                ) : (
                  <button className="btn btn-secondary btn-lg w-100 py-3 mb-3" disabled>
                    Sin stock disponible
                  </button>
                )}
                
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