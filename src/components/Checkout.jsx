import React, { useState } from "react";
import { useCart } from '../context/useCart';
import { db } from "../services/firebase/config";  // ← Importar desde config.js
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { carrito, total, vaciarCarrito } = useCart();
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
      // 1. Crear el objeto de la orden
      const orden = {
        comprador: formData,
        items: carrito.map(item => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          cantidad: item.cantidad
        })),
        total: total,
        fecha: new Date().toISOString(),
        estado: "pendiente"
      };

      // 2. Guardar en Firebase
      const ordersRef = collection(db, "orders");  // "orders" es el nombre de la colección
      const docRef = await addDoc(ordersRef, orden);

      // 3. Mostrar éxito
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
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>¡Compra realizada con éxito! ✅</h2>
        <p>Tu número de orden es:</p>
        <h3>{ordenId}</h3>
        <p>Te enviamos los detalles a: {formData.email}</p>
        <button onClick={() => window.location.href = "/"}>
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Finalizar Compra</h2>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Total a pagar: ${total.toFixed(2)}
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Nombre completo *</label>
          <input
            type="text"
            name="Matias"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email *</label>
          <input
            type="email"
            name="matias.mattea@gmaIL.COM"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Teléfono *</label>
          <input
            type="tel"
            name="3534066820"
            value={formData.telefono}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Dirección de envío *</label>
          <input
            type="text"
            name="Lamadrid 344"
            value={formData.direccion}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            width: "100%"
          }}
        >
          {loading ? "Procesando..." : "Confirmar Compra"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;