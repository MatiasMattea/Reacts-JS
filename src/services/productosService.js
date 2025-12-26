import { db } from '../firebase/config';
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";


async function obtenerProductos() {
  try {
    console.log("🔥 Llamando a Firebase...");
    const productosRef = collection(db, "productos");
    const querySnapshot = await getDocs(productosRef);
    
    console.log("📄 QuerySnapshot recibido:", querySnapshot);
    
    const productos = [];
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });
    
    console.log("✅ Productos procesados:", productos.length);
    return productos;
  } catch (error) {
    console.error("💥 Error en obtenerProductos:", error);
    return []; 
  }
}


async function obtenerProductoPorId(id) {
  try {
    const productoRef = doc(db, "productos", id);
    const productoDoc = await getDoc(productoRef);
    
    if (productoDoc.exists()) {
       const data = productoDoc.data();
      console.log("📦 Datos del producto:", data);
      return { id: productoDoc.id, ...productoDoc.data() };
    } else {
         console.log("❌ Producto no encontrado en Firebase");
      return null;
    }
  } catch (error) {
   console.error("💥 Error en obtenerProductoPorId:", error);
    return null;
  }
}

async function obtenerProductosPorCategoria(categoria) {
  try {
    const productosRef = collection(db, "productos");
    let q;
    
    if (categoria) {
      q = query(productosRef, where("categoria", "==", categoria));
    } else {
      q = query(productosRef);
    }
    
    const querySnapshot = await getDocs(q);
    const productos = [];
    
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });
    
    return productos;
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    return [];
  }
}

export { obtenerProductos, obtenerProductoPorId, obtenerProductosPorCategoria };