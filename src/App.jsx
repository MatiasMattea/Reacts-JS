// src/App.jsx - Verifica que tengas estas rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer";  // ← Este es importante
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Página de inicio */}
          <Route path="/" element={<Home />} />
          
          {/* CATEGORÍAS - Esta es la ruta IMPORTANTE */}
          <Route path="/category/:id" element={<ItemListContainer />} />
          
          {/* Todos los productos */}
          <Route path="/products" element={
            <ItemListContainer greeting="Todos los Productos" />
          } />
          
          {/* Detalle de producto */}
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          
          {/* Carrito */}
          <Route path="/cart" element={<Cart />} />
          
          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;