import { useState, useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { CartContext, CartDispatchContext } from "../contexts/CartContext";
function Basket(props) {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const [showForm, setShowForm] = useState(false);
  function getTotal() {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }
  return (
    <section className="Basket">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount},{" "}
            {item.amount * item.price},-
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: {
                    id: item.id,
                  },
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()},-</h3>
      {!showForm && <button onClick={() => setShowForm(true)}>Buy now</button>}
      {showForm && <CheckoutForm />}
    </section>
  );
}

export default Basket;
