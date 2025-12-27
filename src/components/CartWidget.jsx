import { useCart } from '../context/useCart';
import { Link } from 'react-router-dom'; 

const CartWidget = () => {
  const { cantidadTotal } = useCart();

  return (
    <Link to="/cart" className="cart-widget text-decoration-none">
      <div className="cart-widget">
        <i className="bi bi-cart3"></i>
        {cantidadTotal > 0 && ( 
          <span className="badge bg-danger">{cantidadTotal}</span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;