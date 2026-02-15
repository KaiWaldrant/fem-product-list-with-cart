import type { Product } from "../types/json";
// import CartButton from "./cart-button";

export default function ItemCard({ product }: { product: Product }) {
  return (
    <div className="item-card">
      <div className="item-card__header">
        <img src={product.image.thumbnail} alt={product.name} />
        {/* <CartButton name={product.name} price={product.price} /> */}
      </div>
      <div className="item-card__info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}