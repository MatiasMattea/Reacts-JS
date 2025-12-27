import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer"; 
import ItemDetail from './components/ItemDetail';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/category/:id" element={<ItemListContainer />} />
  <Route path="/products" element={<ItemListContainer greeting="Todos los productos" />} />
  
  {/* ¡ESTAS SON LAS IMPORTANTES! */}
  <Route path="/product/:id" element={<ItemDetail />} />
  <Route path="/item/:id" element={<ItemDetail />} />  
  
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
</Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;