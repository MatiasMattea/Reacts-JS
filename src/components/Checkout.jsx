import React, { useState } from "react";
import { useContext } from 'react'; 
import { CartContext } from '../context/CartContext'; 
import { db } from "../services/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const Checkout = () => {
  const { carrito, total, vaciarCarrito } = useContext(CartContext);
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: ""
  });
  const [ordenId, setOrdenId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orden = {
        comprador: formData,
        items: carrito.map(item => ({
          id: item.id,
          nombre: item.titulo || item.nombre,
          precio: item.precio,
          cantidad: item.cantidad
        })),
        total: total,
        fecha: serverTimestamp(), 
        estado: "pendiente"
      };

      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, orden);

      setOrdenId(docRef.id);
      vaciarCarrito();
      
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Hubo un error al procesar tu compra. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (ordenId) {
    return (
      <div className="container mt-5 text-center">
        <div className="card shadow-lg border-0" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card-body p-5">
            <div className="mb-4">
              <div className="text-success" style={{ fontSize: '4rem' }}>✅</div>
              <h2 className="mt-3">¡Compra realizada con éxito!</h2>
            </div>
            
            <div className="alert alert-info">
              <h5>Tu número de orden:</h5>
              <h3 className="text-primary">{ordenId}</h3>
            </div>
            
            <p className="mb-4">
              Te enviamos los detalles a: <strong>{formData.email}</strong>
            </p>
            
            <button 
              className="btn btn-danger btn-lg"
              onClick={() => window.location.href = "/"}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Finalizar Compra</h1>
      
      <div className="row">
        {/* Formulario de compra */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="mb-4"> Datos de contacto</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <strong>Nombre completo *</strong>
                    <small className="text-muted ms-2">(Como figura en tu documento)</small>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg"
                    placeholder="Ej: Esteban Peralta"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <strong>Email *</strong>
                    <small className="text-muted ms-2">(Recibirás la factura aquí)</small>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg"
                    placeholder="ejemplo@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <strong>Teléfono *</strong>
                    <small className="text-muted ms-2">(Para contacto del envío)</small>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg"
                    placeholder="11 1234-5678"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    <strong>Dirección de envío *</strong>
                    <small className="text-muted ms-2">(Calle, número, ciudad, CP)</small>
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg"
                    placeholder="Av. Sargento Cabral 1234, CABA."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-danger btn-lg w-100 py-3"
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Procesando compra...
                    </>
                  ) : (
                    "Confirmar y Pagar"
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h4 className="mb-3"> Información importante</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 px-0">
                  <strong>Plazos de entrega:</strong> 3-5 días hábiles para CABA, 5-10 días para interior
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Horario de envío:</strong> Lunes a Viernes de 9:00 a 18:00
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Contacto post-venta:</strong> soporte@M2Mbomberos.com
                </li>
                <li className="list-group-item border-0 px-0">
                  <strong>Cambios y devoluciones:</strong> 30 días
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '90px' }}>
            <div className="card-body p-4">
              <h3 className="mb-4"> Resumen de compra</h3>
              
              {/* Items del carrito */}
              <div className="mb-4">
                <h5>Productos ({carrito.length})</h5>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {carrito.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <div>
                        <small>{item.nombre}</small>
                        <br />
                        <small className="text-muted">x{item.cantidad}</small>
                      </div>
                      <small>${(item.precio * item.cantidad).toLocaleString()}</small>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span className="text-success">GRATIS</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Impuestos:</span>
                  <span>Incluidos</span>
                </div>
                <div className="d-flex justify-content-between fs-4 fw-bold border-top pt-3">
                  <span>TOTAL:</span>
                  <span className="text-danger">${total.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="mb-3">💳 Formas de pago</h5>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-primary">Tarjeta de crédito</span>
                  <span className="badge bg-success">Tarjeta de débito</span>
                  <span className="badge bg-warning">Mercado Pago</span>
                  <span className="badge bg-info">Transferencia</span>
                </div>
                <small className="text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Pago seguro SSL 256-bit encriptado
                </small>
              </div>
              
              <div className="mt-4">
                <h5 className="mb-3">Garantías</h5>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <small>Garantía oficial del fabricante</small>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <small>Devolución en 30 días</small>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <small>Soporte técnico especializado</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;