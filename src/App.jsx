import { useState, useEffect, useReducer } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { TaxProvider } from "./contexts/TaxContext";
import { CartProvider } from "./contexts/CartContext";
//import { reducer } from "./reducers/cartReducer";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <CartProvider>
        <TaxProvider>
          <Header />
          <ProductList products={products} />
          <Basket products={products} />
        </TaxProvider>
      </CartProvider>
    </div>
  );
}

export default App;
