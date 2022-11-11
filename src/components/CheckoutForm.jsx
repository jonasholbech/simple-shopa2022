import { useRef, useState, useContext } from "react";
import { insertOrder } from "../modules/db";
import { CartContext, CartDispatchContext } from "../contexts/CartContext";
function CheckoutForm(props) {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const theForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: cart,
    });
    if (response && response.length) {
      dispatch({
        type: "CLEAR",
      });
      setPaymentCompleted(true);
    }
  }
  return (
    <>
      {paymentCompleted ? (
        <p>THANK YOU!!</p>
      ) : (
        <form onSubmit={submit} ref={theForm}>
          <div className="form-control">
            <label htmlFor="form-name">Name</label>
            <input required type="text" name="name" id="form-name" />
          </div>
          <div className="form-control">
            <label htmlFor="form-email">E-mail</label>
            <input required type="email" name="email" id="form-email" />
          </div>
          <div className="form-control">
            <label htmlFor="form-address">Address</label>
            <textarea required name="address" id="form-address"></textarea>
          </div>
          <button>Pay</button>
        </form>
      )}
    </>
  );
}
//name
//email
//address

export default CheckoutForm;
