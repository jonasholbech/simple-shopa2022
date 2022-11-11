import { useState, useEffect, useReducer } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { TaxProvider } from "./contexts/TaxContext";
import { reducer } from "./reducers/cartReducer";
function App() {
  const [products, setProducts] = useState([]);
  const initialState = [];
  const [cart, dispatch] = useReducer(reducer, initialState);

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
      <TaxProvider>
        <Header />
        <ProductList products={products} dispatch={dispatch} />
        <Basket dispatch={dispatch} products={products} cart={cart} />
      </TaxProvider>
    </div>
  );
}

export default App;
