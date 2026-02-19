import IconCarbonNeutral from "../assets/icons/icon-carbon-neutral"
import IllustrationEmptyCart from "../assets/icons/illustration-empty-cart"
import type { CartType } from "../types/cart"
import type { Product } from "../types/json"
import CartItem from "./cart-item"

interface CartProps {
	productLookup: Record<string, Product>
	cart: CartType
	updateCartQuantity: (productName: string, change: number) => void
	openConfirmedModal: () => void
}

export default function Cart({
	productLookup,
	cart,
	updateCartQuantity,
	openConfirmedModal,
}: CartProps) {
	const totalQuantity = Object.values(cart).reduce(
		(acc, cartItem) => acc + cartItem.quantity,
		0,
	)

	const totalPrice = Object.entries(cart).reduce(
		(acc, [productName, cartItem]) =>
			acc + cartItem.quantity * productLookup[productName].price,
		0,
	)
	return (
		<section className="cart__container">
			<h2 className="cart__heading">Your Cart ({totalQuantity})</h2>
			{Object.keys(cart).length > 0 ? (
				<>
					<div className="cart__items">
						{Object.entries(cart).map(([productName, cartItem]) => (
							<CartItem
								key={productName}
								name={productName}
								price={productLookup[productName].price}
								quantity={cartItem.quantity}
								handleRemoveItem={() =>
									updateCartQuantity(productName, -cartItem.quantity)
								}
							/>
						))}
					</div>
					<div className="cart-total">
						<p className="cart-total__heading">Order Total</p>
						<p className="cart-total__price">${totalPrice.toFixed(2)}</p>
					</div>
					<div className="cart-carbon">
						<IconCarbonNeutral />
						<p>
							This is a <span>carbon-neutral</span> deliviery
						</p>
					</div>
					<button
						className="btn-confirm"
						type="button"
						onClick={() => openConfirmedModal()}
					>
						Confirm Order
					</button>
				</>
			) : (
				<div className="cart__empty">
					{/* placeholder */}
					<IllustrationEmptyCart />
					<p className="placeholder">Your added items will appear here</p>
				</div>
			)}
		</section>
	)
}
