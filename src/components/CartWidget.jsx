import { useCart } from '../context/CartContext'; // ← AGREGAR
import { Link } from 'react-router-dom'; // ← AGREGAR

const CartWidget = () => {
  const { cantidadTotal } = useCart(); // ← AGREGAR

  return (
    <Link to="/cart" className="cart-widget text-decoration-none"> {/* ← AGREGAR LINK */}
      <div className="cart-widget">
        <i className="bi bi-cart3"></i>
        {cantidadTotal > 0 && ( // ← MOSTRAR SOLO SI HAY ITEMS
          <span className="badge bg-danger">{cantidadTotal}</span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;