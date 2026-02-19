import { Fragment, forwardRef } from "react"
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
			<dialog ref={ref} id="cart-confirmation" className="confirmed-container">
				<div className="confirmed__header">
					<IconOrderConfirmed />
					<div className="confirmed-header__title">
						<h3 className="confirmed-header__heading">Order Confirmed</h3>
						<p className="confirmed-header_subheading">
							We hope you enjoy your food!
						</p>
					</div>
				</div>
				<div className="confirmed-content">
					<div className="confirmed-items">
						{Object.entries(cart).map(([productName, confirmedItem], index) => (
							<Fragment
								key={`${productName}-${confirmedItem.quantity}-confirmed`}
							>
								<ConfirmedItem
									key={`${productName}-confirmed`}
									name={productName}
									thumbnail={productLookup[productName].image.thumbnail}
									price={productLookup[productName].price}
									quantity={confirmedItem.quantity}
								/>
								{index < Object.entries(cart).length - 1 && <hr />}
							</Fragment>
						))}
					</div>
					<hr />
					<div className="confirmed-total">
						<p className="confirmed-total__heading">Order Total</p>
						<p className="confirmed-total__price">${totalPrice.toFixed(2)}</p>
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
