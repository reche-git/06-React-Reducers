const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, image } = data;

  return (
      <div className="card">
        <div className="imgBox">
          <img
            className="img"
            src={require(`../assets/products/${image}.png`)}
            alt="product"
          />
        </div>
        <div className="contentBox">
          <h3>{name}</h3>
          <h2 className="price">${price}.00</h2>
          <button className="buy" onClick={() => addToCart(id)}>
            Add To Cart
          </button>
      </div>
    </div>
  );
};

export default ProductItem;

{
  /* <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <img
        className="productImg"
        src={require(`../assets/products/${image}.png`)}
        alt="product"
      />
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Add To Cart</button>
    </div> */
}
