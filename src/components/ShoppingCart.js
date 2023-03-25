import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    // console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    // console.log("clearing the cart");
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
        <br />
        <button onClick={clearCart}>Reset Cart</button>
      </article>
    </div>
  );
};

export default ShoppingCart;
