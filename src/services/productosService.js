import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';


const productosLocal = [
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


export const obtenerProductos = async () => {
  console.log('🔍 SERVICE - Intentando obtener productos...');
  
  try {
   
const querySnapshot = await getDocs(collection(db, "Productos"));    
    if (!querySnapshot.empty) {
      const productosFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('✅ SERVICE - Productos desde Firestore:', productosFirestore.length);
      return productosFirestore;
    }
    

    console.log('⚠️ SERVICE - Firestore vacío, usando datos locales');
    return productosLocal;
    
  } catch (error) {

    console.error('❌ SERVICE - Error con Firestore:', error.message);
    console.log('🔄 SERVICE - Usando datos locales como fallback');
    return productosLocal;
  }
};

export const obtenerProductoPorId = async (id) => {
  console.log('🔍 SERVICE - Buscando producto ID:', id);
  
  try {

    const productos = await obtenerProductos();
    const producto = productos.find(p => p.id === id || p.id === parseInt(id));
    
    console.log('✅ SERVICE - Producto encontrado:', producto ? 'Sí' : 'No');
    return producto || null;
    
  } catch (error) {
    console.error('❌ SERVICE - Error al buscar producto:', error.message);
    return null;
  }
};

export const obtenerProductosPorCategoria = async (categoriaId) => {
  console.log('🔍 SERVICE - Filtrando por categoría:', categoriaId);
  
  try {

    const q = query(
      collection(db, "products"),
      where("category", "==", categoriaId)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const productos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('✅ SERVICE - Productos desde Firestore (filtrados):', productos.length);
      return productos;
    }
    

    console.log('⚠️ SERVICE - Firestore vacío para categoría, usando datos locales');
    const productosFiltrados = productosLocal.filter(p => p.category === categoriaId);
    console.log('✅ SERVICE - Productos locales (filtrados):', productosFiltrados.length);
    return productosFiltrados;
    
  } catch (error) {

    console.error('❌ SERVICE - Error al filtrar por categoría:', error.message);
    const productosFiltrados = productosLocal.filter(p => p.category === categoriaId);
    return productosFiltrados;
  }
};