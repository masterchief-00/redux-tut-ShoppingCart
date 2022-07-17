import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQty);
  const showCart = () => {
    dispatch(cartActions.SetShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
