import data from "./data/data.json";
import List from "./components/list";
import Cart from "./components/cart";
import type { CartType } from "./types/cart";
import { useState } from "react";

function App() {
const [cart, setCart] = useState<CartType>({});

const updateCartQuantity = (productName: string, change: number) => {

  const currentQuantity = cart[productName]?.quantity || 0;
  const newQuantity = currentQuantity + change;

  if (newQuantity > 0) {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: {quantity: newQuantity}
    }));
  } else if ( newQuantity === 0) {
    setCart((prevCart) => {
      const {[productName]: _, ...rest} = prevCart;
      return rest
    });
  }
};

  return (
    <main>
      <section className="container">
        <h1 className="heading">Desserts</h1>
        <List products={data} />
      </section>
      <Cart />
    </main>
  )
}

export default App
