import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; // ← AGREGAR
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category?" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} /> {/* ← AGREGAR */}
            <Route path="/checkout" element={<h1 className="text-center mt-5">Checkout (próximamente)</h1>} />
            <Route path="*" element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;