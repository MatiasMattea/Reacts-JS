# 🚒 M2M Tienda para Bomberos - E-commerce React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Proyecto Final del curso de React JS - CoderHouse**
E-commerce especializado en equipamiento para bomberos desarrollado con React, Firebase, Vercel y Bootstrap.

## Características Principales

- ✅ **Catálogo completo** de productos por categorías (Cascos, Ropa, botas, Guantes)
- ✅ **Carrito de compras** con persistencia en localStorage
- ✅ **Checkout** con generación de órdenes en Firebase
- ✅ **Sistema de stock** en tiempo real
- ✅ **Diseño 100% responsive** (mobile, tablet, desktop)
- ✅ **Manejo de errores** y estados de carga
- ✅ **Navegación SPA** con React Router DOM

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 18, React Router DOM 6
- **Backend:** Firebase Firestore (Base de datos en tiempo real)
- **Estilos:** Bootstrap 5 + CSS personalizado
- **Deploy:** Vercel
- **Gestión de estado:** React Context API

## 📁 Estructura del Proyecto

src/
├── components/ # Componentes reutilizables
│ ├── Cart.jsx # Vista del carrito
│ ├── CartItem.jsx # Item individual del carrito
│ ├── CartWidget.jsx # Widget del carrito en navbar
│ ├── ItemCount.jsx # Selector de cantidad
│ ├── ItemDetail.jsx # Detalle de producto
│ ├── ItemList.jsx # Lista de productos
│ └── NavBar.jsx # Barra de navegación
├── context/ # Context API
│ └── CartContext.jsx # Estado global del carrito
├── services/ # Servicios y API
│ └── productosService.js # Conexión con Firebase
├── pages/ # Vistas principales
│ ├── Home.jsx # Página de inicio
│ ├── Category.jsx # Página por categoría
│ └── Products.jsx # Todos los productos
└── App.jsx # Configuración de rutas

