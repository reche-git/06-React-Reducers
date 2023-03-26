const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, image } = data;

  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <img className="productImg" src={require(`../assets/products/${image}.png`)} alt="product" />
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
  );
};

export default ProductItem;
