import IconOrderConfirmed from "../assets/icons/icon-order-confirmed"
import type { CartType } from "../types/cart"
import type { Product } from "../types/json"
import ConfirmedItem from "./confirmed-item"

interface confirmedModalProps {
	reference: React.RefObject<HTMLDialogElement>
	productLookup: Record<string, Product>
	cart: CartType
	clearCart: () => void
}

export default function ConfirmedModal({
	reference,
	productLookup,
	cart,
	clearCart,
}: confirmedModalProps) {
	const totalPrice = Object.entries(cart).reduce(
		(acc, [productName, confirmedItem]) =>
			acc + confirmedItem.quantity * productLookup[productName].price,
		0,
	)

	return (
		<dialog ref={reference} id="cart-confirmation">
			<div className="confirmation__header">
				<IconOrderConfirmed />
				<h3>Order Confirmed</h3>
				<p>We hope you enjoy your food!</p>
			</div>
			<div className="confirmed__body">
				<div className="confirmed__items">
					{Object.entries(cart).map(([productName, confirmedItem]) => (
						<ConfirmedItem
							key={productName}
							name={productName}
							thumbnail={productLookup[productName].image.thumbnail}
							price={productLookup[productName].price}
							quantity={confirmedItem.quantity}
						/>
					))}
				</div>
				<hr />
				<div className="confirmed__total">
					<p className="confirmed__total__heading">Order Total</p>
					<p className="confirmed__total__price">${totalPrice.toFixed(2)}</p>
				</div>
			</div>
			<button className="btn-confirm" type="button" onClick={clearCart}>
				Start New Order
			</button>
		</dialog>
	)
}
