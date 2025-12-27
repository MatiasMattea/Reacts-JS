import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  });


  const total = 2400000.00;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Compra confirmada! Gracias por tu pedido.');
  };

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      
      {/* TÍTULO */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="text-danger fw-bold display-5">FINALIZAR COMPRA</h1>
          <p className="text-muted lead">Completa tus datos para recibir el pedido</p>
        </div>
      </div>

      <div className="row justify-content-center">
        
        {/* FORMULARIO */}
        <div className="col-12 col-md-10 col-lg-5 mb-4 mb-lg-0">
          <div className="card shadow h-100">
            <div className="card-body p-4">
              <h3 className="text-danger mb-4">
                <i className="bi bi-person-fill me-2"></i>
                INFORMACION PERSONAL
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Nombre Completo *</label>
                  
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email *</label>
                  
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Teléfono *</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">Dirección *</label>
                  
                  <textarea 
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="form-control" 
                    rows="3" 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-danger btn-lg w-100 py-3">
                  <i className="bi bi-check-circle me-2"></i>
                  CONFIRMAR COMPRA
                </button>
              </form>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-md-10 col-lg-5">
          <div className="card shadow h-100">
            <div className="card-body p-4">
              <h3 className="text-danger mb-4">
                <i className="bi bi-credit-card-fill me-2"></i>
                RESUMEN DEL PAGO
              </h3>
              
              
              <div className="bg-light rounded-3 p-4 text-center mb-4">
                <p className="text-muted mb-2">TOTAL A PAGAR</p>
                <h1 className="text-danger fw-bold" style={{ fontSize: '2.5rem' }}>
                  ${total.toLocaleString('es-CL')}
                </h1>
              </div>

              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Beneficios:</h5>
                <div className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Pago 100% seguro
                </div>
                <div className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Envío en 24-48 horas
                </div>
                <div className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Garantía 1 año
                </div>
                <div className="mb-2">
                  <i className="bi bi-check text-success me-2"></i>
                  Productos Originales y Certificados bajo Norma NFPA
                </div>
              </div>

              
              <div className="border-top pt-4 mt-3">
                <div className="text-center">
                  <i className="bi bi-shield-check text-success fs-2 mb-2"></i>
                  <p className="text-muted small">Compra 100% segura</p>
                </div>
              </div>

              
              <div className="mt-4">
                <Link to="/cart" className="btn btn-outline-dark w-100">
                  <i className="bi bi-arrow-left me-2"></i>
                  Volver al carrito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p className="text-muted">¿Necesitas ayuda? +56 9 1234 5678</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;