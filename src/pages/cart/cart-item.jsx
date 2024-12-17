import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      updateCartItemCount(value, id);
    }
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt={`${productName} image`} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={handleInputChange}
            min="0" // Ensures the count cannot go below 0
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

