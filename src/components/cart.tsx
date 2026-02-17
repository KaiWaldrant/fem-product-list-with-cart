import IllustrationEmptyCart from "../assets/icons/illustration-empty-cart";
import type { Product } from "../types/json";
import type { CartType } from "../types/cart";

interface CartProps {
  products: Product[];
  cart: CartType;
  updateCartQuantity: (productName: string, change: number) => void;
}

export default function Cart( {products, cart, updateCartQuantity} : CartProps) {
  return (
    <section className="cart__container">
      <h2 className="cart__heading">Your Cart (0)</h2>
      { Object.keys(cart).length > 0 ? (
        <div className="cart__items">
        
        </div>
      ) : (
      <div className="cart__items">
        {/* placeholder */}
        <IllustrationEmptyCart />
        <p className="placeholder">Your added items will appear here</p>
      </div>)}
    </section>
  );
}