import  IconAddToCart from "../assets/icons/icon-add-to-cart"
import IconDecrementQuantity from "../assets/icons/icon-decrement-quantity";
import IconIncrementQuantity from "../assets/icons/icon-increment-quantity";

export interface CartButtonProps {
  isInCart: boolean;
  quantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
}

export function CartButton({isInCart, quantity, handleDecrease, handleIncrease} : CartButtonProps) {
  return (
    <>
      { isInCart? (
        <button className="btn btn-update" >
          <a onClick={() => handleDecrease()}>
            <IconDecrementQuantity />
          </a>
          <p>{quantity}</p>
          <a onClick={() => handleIncrease()}>
            <IconIncrementQuantity />
          </a>
        </button>
      ) : (
        <button className="btn btn-add" onClick={() => handleIncrease()}>
          <IconAddToCart />
          <p>Add to Cart</p>
        </button>
      )}
      
    </>
  );
}