import IconRemoveItem from "../assets/icons/icon-remove-item"

interface CartItemProps {
	name: string
	price: number
	quantity: number
	handleRemoveItem: () => void
}

export default function CartItem({
	name,
	price,
	quantity,
	handleRemoveItem,
}: CartItemProps) {
	return (
		<div className="cart-item">
			<div className="cart-item__info">
				<h4 className="cart-item__name">{name}</h4>
				<div className="cart-item__details">
					<p className="cart-item__quantity">{quantity}x</p>
					<p className="cart-item__price">@ ${price.toFixed(2)}</p>
					<p className="cart-item__total">${(price * quantity).toFixed(2)}</p>
				</div>
			</div>
			<button className="btn-remove" type="button" onClick={handleRemoveItem}>
				<IconRemoveItem />
			</button>
		</div>
	)
}
