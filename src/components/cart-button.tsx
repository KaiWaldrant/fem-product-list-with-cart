import IconAddToCart from "../assets/icons/icon-add-to-cart"
import IconDecrementQuantity from "../assets/icons/icon-decrement-quantity"
import IconIncrementQuantity from "../assets/icons/icon-increment-quantity"

export interface CartButtonProps {
	isInCart: boolean
	quantity: number
	handleDecrease: () => void
	handleIncrease: () => void
	ariaLabel: string
}

export function CartButton({
	isInCart,
	quantity,
	handleDecrease,
	handleIncrease,
	ariaLabel,
}: CartButtonProps) {
	return (
		<>
			{isInCart ? (
				<div className="btn btn-update">
					<button
						aria-label={`decrease ${ariaLabel}`}
						type="button"
						onClick={() => handleDecrease()}
					>
						<IconDecrementQuantity />
					</button>
					<p>{quantity}</p>
					<button
						aria-label={`increase ${ariaLabel}`}
						type="button"
						onClick={() => handleIncrease()}
					>
						<IconIncrementQuantity />
					</button>
				</div>
			) : (
				<button
					aria-label={ariaLabel}
					type="button"
					className="btn btn-add"
					onClick={() => handleIncrease()}
				>
					<IconAddToCart />
					<p>Add to Cart</p>
				</button>
			)}
		</>
	)
}
