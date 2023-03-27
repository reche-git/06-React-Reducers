const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, image, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
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
    </div>
  );
};

export default CartItem;

// EDIT CSS WITH CART CHECKOUT PROTOTYPE
