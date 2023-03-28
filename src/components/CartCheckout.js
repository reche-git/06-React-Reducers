import CartItem from "./CartItem";

export const CartCheckout = ({ data, delFromCart, addToCart, cart, clearCart }) => {
  const {price, quantity} = data
    return (
    <div className="bodyContainer">
      <div className="CartContainer">
        <div className="HeaderCart">
          <h3 className="HeadingCart">Shopping Cart</h3>
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
          <button onClick={clearCart}>Reset Cart</button>
        </article>

        <hr className="cartHr" />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">{quantity} Items</div>
            </div>
            {/* PASS QUANTITY AND PRICE FROM CARTITEM TO HERE WITH A STATE CONST */}
            <div className="total-amount">${price * quantity}.00</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
