import type { Product } from "../types/json";
// import CartButton from "./cart-button";

export default function ItemCard({ product }: { product: Product }) {
  return (
    <div className="item-card">
      <div className="item-card__header">
        <picture>
          <source srcSet={product.image.mobile} media="(max-width: 767px)" />
          <source srcSet={product.image.tablet} media="(max-width: 1439px)" />
          <source srcSet={product.image.desktop} media="(min-width: 1440px)" />
          <img src={product.image.thumbnail} alt={product.name} />
        </picture>
        {/* <CartButton name={product.name} price={product.price} /> */}
      </div>
      <div className="item-card__info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}