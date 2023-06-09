import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { useModal } from "../hooks/useModal";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { CartCheckout } from "./CartCheckout";
import Modal from "./Modal";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products } = state;
  // console.log(state);

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
    <div className="shopping">
      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>Do you feel like buying some frameworks?</h3>
          <p style={{ textAlign: "center" }}>Wellcome to the Framework Shop!</p>
          <p>
            This is a fully functional shop with a checkout whose logic is state
            and actions are stored in the{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/reducers/shoppingReducer.js"
              rel="noreferrer"
              target="_blank"
            >
              shoppingReducer
            </a>{" "}
            file.
          </p>
          <p>
            This is an intent to show my understanding in the management of the
            state and the usage of actions to alter it.
          </p>
          <p>
            Next project is going to be this same one but with Redux Library!
          </p>
          <p>
            Check my{" "}
            <a
              href="https://github.com/reche-git"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>{" "}
            for more!
          </p>
        </div>
      </Modal>
      {/* Modal */}

      <div>
        <button className="btnModal" onClick={openModal}>
          <h2 style={{ marginTop: "3rem" }}>Shopping Cart</h2>
        </button>
        <article className="box grid-responsive">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </article>
        <CartCheckout
          state={state}
          data={products}
          delFromCart={delFromCart}
          addToCart={addToCart}
          clearCart={clearCart}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;

{
  /* <article className="box">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              addToCart={addToCart}
            />
          ))}
          <br />
          <button onClick={clearCart}>Reset Cart</button>
        </article> */
}
