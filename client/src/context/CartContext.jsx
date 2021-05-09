import { createContext, useState } from "react";
import * as React from "react";

export const CartContext = createContext([{}, function (value) {}]);

const CartContextProvider = (props) => {
  const { value } = props;
  const [cart, setCart] = useState(value);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
