const productos = [
  { 
    id: 1, 
    titulo: "Casco Bullard LTX", 
    precio: 50000, 
    descripcion: "Diseñado para ayudar a proteger la cabeza del bombero y el cuello.", 
    imagen: "/images/cascobulllard.png", 
    categoria: "cascos",
    stock: 8
  },
  { 
    id: 2, 
    titulo: "Casco Rosembauer Heros Titan", 
    precio: 70000, 
    descripcion: "Es la seguridad de la experiencia. La facilidad que se obtiene del conocimiento y la tecnología. Es la realización de ideas innovadoras", 
    imagen: "/images/casco_rosembauer.png", 
    categoria: "cascos",
    stock: 5
  },
  { 
    id: 3, 
    titulo: "Casco VFR-EVO", 
    precio: 73000, 
    descripcion: "El casco Bomberos VFR-EVO cuenta con un sistema de conexión universal de dos puntos para máscaras antigás en los laterales de la calota, ajustable individualmente, lo que lo hace compatible con todas las máscaras del mercado y crea una combinación casco-máscara eficiente y segura.", 
    imagen: "/images/casco2.png", 
    categoria: "cascos",
    stock: 10
  },
  { 
    id: 4, 
    titulo: "Casco Forestal EOM", 
    precio: 45800, 
    descripcion: "El casco de protección modelo EOM representa el mejor sistema de protección de la cabeza en extinción de incendios forestales, rescate técnico, rescate en altura y rescate en aguas torrenciales.", 
    imagen: "/images/cascoforestal.png", 
    categoria: "cascos",
    stock: 0
  },
  { 
    id: 5, 
    titulo: "Casco forestal Bullard", 
    precio: 62000, 
    descripcion: "Casco de ala completa con estilo sombrero, ideal para brindar seguridad y comodidad al personal de bomberos. Su cómodo diseño termoplástico ofrece una alta resistencia a temperaturas extremas.", 
    imagen: "/images/cascoforestal1.png", 
    categoria: "cascos",
    stock: 7
  },
  { 
    id: 6, 
    titulo: "Chaqueta y Pantalon MSA", 
    precio: 500000, 
    descripcion: "El diseño Ergotech Action 2 de MSA Bristol, desarrollado tras una cuidadosa investigación y extensas pruebas con usuarios sobre la ergonomía de las actividades de los bomberos más frecuentes en el día a día, se ha convertido en el estándar por el que se miden los EPP ligeros para bomberos en cuanto a comodidad y rendimiento.", 
    imagen: "/images/Ropa-msa.png", 
    categoria: "ropa",
    stock: 4
  },
  { 
    id: 7, 
    titulo: "Chaqueta y Pantalon Rosembauer", 
    precio: 800000, 
    descripcion: "Un traje de protección que parece una segunda piel y que, por lo tanto, puede llevarse durante muchas horas sin que suponga cansancio adicional: ese era el objetivo al diseñar el GAROS G30. Rosenbauer ha implementado muchas de las características del popular traje de bomberos de alta calidad FIRE FLEX. La combinación de corte ergonómico, materiales de alta calidad y peso reducido hace que el GAROS G30 sea la prenda de protección perfecta para todo el personal de los servicios de emergencia cuya función no es la extinción de incendios", 
    imagen: "/images/ropa-rosem.png", 
    categoria: "ropa",
    stock: 3
  },
  { 
    id: 8, 
    titulo: "Estructural forestal", 
    precio: 200000, 
    descripcion: "Forestal Inforest", 
    imagen: "/images/forestal.png", 
    categoria: "ropa",
    stock: 15
  },
  { 
    id: 9, 
    titulo: "Estructural forestal", 
    precio: 250000, 
    descripcion: "La camisa y pantalón están fabricados en tejido inherentemente ignífugo, tanto la tela como su diseño ofrecen una alta protección y resistencia frente a las llamas. Además, es muy confortable para el usuario aún en una jornada de trabajo intensa.", 
    imagen: "/images/forestal1.png", 
    categoria: "ropa",
    stock: 9
  },
  { 
    id: 10, 
    titulo: "Mameluco forestal", 
    precio: 80000, 
    descripcion: "Fabricado en tejido ignífugo de excelente calidad, una tela suave que evita irritaciones, elimina la transpiración y disipa el calor corporal. Diseño ergonómico y reforzado para mayor resistencia y duración ante cualquier esfuerzo.", 
    imagen: "/images/mamelucoforestal.png", 
    categoria: "ropa",
    stock: 20
  },
  { 
    id: 11, 
    titulo: "Guantes de Incendio", 
    precio: 30000, 
    descripcion: "El SAFE GRIP 3 combina características de protección maximas con un dinámico diseño. Garantiza protección y comodidad para el bombero profesional. Para ello, los materiales seleccionados se procesan con el mayor cuidado posible. Los guantes de bombero son parte del equipamiento de protección de los bomberos y, por lo tanto, son indispensables durante las intervenciones de combate de incendios e intervenciones técnicas de rescate.", 
    imagen: "/images/Guantes.jpg", 
    categoria: "guantes",
    stock: 25
  },
  { 
    id: 12, 
    titulo: "Guantes de Incendio", 
    precio: 40000, 
    descripcion: "Estos cómodos guantes están confeccionados en cuero ignífugo con tratamiento hidrófugo que evita el paso de la humedad externa hacia el interior, manteniendo las manos secas y permitiendo la destreza del bombero.", 
    imagen: "/images/guantesestructurales.png", 
    categoria: "guantes",
    stock: 18
  },
  { 
    id: 13, 
    titulo: "Guantes de Incendio Forestal", 
    precio: 20000, 
    descripcion: "Guantes ideales para la protección de trabajos de incendio. Su diseño y material permiten buena destreza y manipulación de elementos, además, están confeccionados en cuero vaqueta que ofrece resistencia y duración en proteger frente a las altas temperaturas.", 
    imagen: "/images/guantesforetales.png", 
    categoria: "guantes",
    stock: 30
  },
  { 
    id: 14, 
    titulo: "Guantes de Incendio Forestal", 
    precio: 20000, 
    descripcion: "Guantes ideales para la protección de trabajos de incendio. Su diseño y material permiten buena destreza y manipulación de elementos, además, están confeccionados en cuero vaqueta que ofrece resistencia y duración en proteger frente a las altas temperaturas.", 
    imagen: "/images/guantesforetales1.png", 
    categoria: "guantes",
    stock: 0
  }
];

// 2. FUNCIONES DEL SERVICIO
export const obtenerProductos = () => {
  console.log('SERVICE - Obteniendo TODOS los productos');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('SERVICE - Productos totales:', productos.length);
      resolve(productos);
    }, 500);
  });
};

export const obtenerProductoPorId = (id) => {
  console.log('SERVICE - Buscando producto ID:', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(p => p.id === parseInt(id));
      console.log('SERVICE - Producto encontrado:', producto);
      resolve(producto || null);
    }, 500);
  });
};

export const obtenerProductosPorCategoria = (categoriaId) => {
  console.log('SERVICE - Filtrando por categoría:', categoriaId);
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtrados = productos.filter(p => p.categoria === categoriaId);
      console.log('SERVICE - Productos encontrados:', filtrados.length);
      console.log('SERVICE - Categorías disponibles:', [...new Set(productos.map(p => p.categoria))]);
      resolve(filtrados);
    }, 500);
  });
};