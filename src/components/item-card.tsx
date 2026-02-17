import type { Product } from "../types/json";
import type { CartType } from "../types/cart";
import {CartButton} from "./cart-button";

export interface ItemCardProps {
  product: Product;
  cart: CartType;
  updateCartQuantity: (productName: string, change: number) => void;
}

export default function ItemCard({ product , cart, updateCartQuantity } : ItemCardProps) {

  const quantity = cart[product.name]?.quantity || 0;

  const handleIncrease = () => updateCartQuantity(product.name, 1)
  const handleDecrease = () => updateCartQuantity(product.name, -1)

  return (
    <div className="item-card">
      <div className="item-card__header">
        <picture>
          <source srcSet={product.image.mobile} media="(max-width: 767px)" />
          <source srcSet={product.image.tablet} media="(max-width: 1439px)" />
          <source srcSet={product.image.desktop} media="(min-width: 1440px)" />
          <img src={product.image.thumbnail} alt={product.name} />
        </picture>
        <CartButton isInCart={quantity > 0} quantity={quantity}  handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
      </div>
      <div className="item-card__info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}