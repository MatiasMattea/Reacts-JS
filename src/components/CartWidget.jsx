import { useCart } from '../context/useCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      <i className="bi bi-cart3" style={{ fontSize: '1.5rem' }}></i>
      {cantidadTotal > 0 && (
        <span className="badge bg-danger">{cantidadTotal}</span>
      )}
    </Link>
  );
};

export default CartWidget;