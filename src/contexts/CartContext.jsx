import { createContext, useReducer } from "react";
import { reducer } from "../reducers/cartReducer";
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);
const initialState = [];
export function CartProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={tasks}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
