import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="btn-group" role="group">
        <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
        <span className="btn btn-light">{count}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      </div>
      <small className="text-muted d-block mt-1">Stock disponible: {stock}</small>
    </div>
  );
};

export default ItemCount;
