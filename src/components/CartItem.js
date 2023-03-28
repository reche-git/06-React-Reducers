import { useEffect } from "react";

const CartItem = ({ data, delFromCart, addToCart }) => {
  let { id, name, price, image, quantity } = data;

  return (
    <>
      <div className="Cart-Items">
        <div className="image-box">
          <img
            className="img"
            src={require(`../assets/products/${image}.png`)}
            alt="product"
            style={{ height: "60px" }}
          />
        </div>
        <div className="about">
          <h1 className="title">{name}</h1>
        </div>
        <div className="counterCart">
          <div className="btn" onClick={() => delFromCart(id)}>
            -
          </div>
          <div className="countCart">{quantity}</div>
          <div className="btn" onClick={() => addToCart(id)}>
            +
          </div>
        </div>
        <div className="prices">
          <div className="amount">${price * quantity}.00</div>
          <div className="save">
            <u>Save for later</u>
          </div>
          <div className="remove">
            <u onClick={() => delFromCart(id, true)}>Remove All</u>
          </div>
        </div>
      </div>
      <hr className="cartHr" />
    </>
  );
};

export default CartItem;

// NOTE: EDIT CSS WITH CART CHECKOUT PROTOTYPE

{
  /* <div style={{ borderBottom: "thin solid gray" }}>
       <h4>{name}</h4>
       <img
        className="productImg"
        src={require(`../assets/products/${image}.png`)}
        alt="product"
      />
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>🗑️</button>
      <button onClick={() => delFromCart(id, true)}>🗑️ All</button>
    </div> */
}
