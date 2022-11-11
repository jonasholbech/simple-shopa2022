import { useContext } from "react";
import { TaxContext } from "../contexts/TaxContext";
import { CartDispatchContext } from "../contexts/CartContext";
function Product(props) {
  const taxes = useContext(TaxContext);
  const dispatch = useContext(CartDispatchContext);

  function add() {
    dispatch({
      type: "ADD",
      payload: props.data,
    });
  }
  return (
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price + props.data.price * taxes},-</p>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`}
        alt={props.data.productdisplayname}
      />
      <button onClick={add}>Add to basket</button>
    </article>
  );
}
/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/
export default Product;
