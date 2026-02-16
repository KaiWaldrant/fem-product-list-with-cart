import  IconAddToCart from "../assets/icons/icon-add-to-cart"

export default function CartButton() {
  return (
    <button className="btn btn-primary">
      <IconAddToCart />
      <p>Add to Cart</p>
    </button>
  );
}