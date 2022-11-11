import Product from "./Product";

function ProductList(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </main>
  );
}

export default ProductList;
