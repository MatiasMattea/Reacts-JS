// En tu proyecto local, crea este archivo
const productos = [
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
    title: "Chaqueta y Pantalon MSA", 
    price: 500000, 
    description: "El diseño Ergotech Action 2 de MSA Bristol, desarrollado tras una cuidadosa investigación y extensas pruebas con usuarios sobre la ergonomía de las actividades de los bomberos más frecuentes en el día a día, se ha convertido en el estándar por el que se miden los EPP ligeros para bomberos en cuanto a comodidad y rendimiento.", 
    image: "/images/Ropa-msa.png", 
    category: "ropa",
    stock: 4
  },
  { 
    id: "4", 
    title: "Guantes de Incendio", 
    price: 30000, 
    description: "El SAFE GRIP 3 combina características de protección maximas con un dinámico diseño. Garantiza protección y comodidad para el bombero profesional.", 
    image: "/images/Guantes.jpg", 
    category: "guantes",
    stock: 25
  }
];

console.log("====================================");
console.log("PRODUCTOS PARA SUBIR A FIRESTORE");
console.log("====================================");
console.log("Total productos:", productos.length);
console.log("\n📋 INSTRUCCIONES:");
console.log("1. Ve a: https://console.firebase.google.com");
console.log("2. Proyecto: tienda-bomberos");
console.log("3. Firestore Database → 'Iniciar colección'");
console.log("4. Collection ID: 'products'");
console.log("5. Para cada producto:");
console.log("   - Copia el objeto JSON");
console.log("   - Pega en Firestore");
console.log("   - Guarda");
console.log("\n📦 PRODUCTOS:");
console.log(JSON.stringify(productos, null, 2));