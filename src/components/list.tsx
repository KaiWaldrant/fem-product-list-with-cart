import type { Product } from "../types/json";
import ItemCard from "./item-card";
import type { CartType } from "../types/cart";


export default function List( products : Product[], cart: CartType ) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ItemCard key={product.name} product={product} cart={cart} />
      ))}
    </div>
  );
}