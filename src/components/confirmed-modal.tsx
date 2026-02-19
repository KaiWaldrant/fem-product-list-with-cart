import { forwardRef } from "react"
import IconOrderConfirmed from "../assets/icons/icon-order-confirmed"
import type { CartType } from "../types/cart"
import type { Product } from "../types/json"
import ConfirmedItem from "./confirmed-item"

interface confirmedModalProps {
	productLookup: Record<string, Product>
	cart: CartType
	clearCart: () => void
}

const ConfirmedModal = forwardRef<HTMLDialogElement, confirmedModalProps>(
	(props, ref) => {
		const { productLookup, cart, clearCart } = props

		const totalPrice = Object.entries(cart).reduce(
			(acc, [productName, confirmedItem]) => {
				return acc + confirmedItem.quantity * productLookup[productName].price
			},
			0,
		)

		return (
			<dialog ref={ref} id="cart-confirmation" open>
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
				<button
					className="btn-confirm"
					type="button"
					onClick={() => clearCart()}
				>
					Start New Order
				</button>
			</dialog>
		)
	},
)

export default ConfirmedModal
