import CartItem from "./CartItem";

export const CartCheckout = ({
  data,
  delFromCart,
  addToCart,
  cart,
  clearCart,
}) => {
  const { quantity } = data;

  return (
    <div className="bodyContainer">
      <div className="CartContainer">
        <div className="HeaderCart">
          <h3 className="HeadingCart">Shopping Cart</h3>
          <h5 className="Action" onClick={clearCart}>
            Remove all
          </h5>
        </div>

        <article className="box">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              addToCart={addToCart}
            />
          ))}
          <br />
        </article>
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">{quantity} Items</div>
            </div>
            {/* PASS QUANTITY AND PRICE FROM CARTITEM TO HERE WITH A STATE CONST */}
            <div className="total-amount">$0</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
