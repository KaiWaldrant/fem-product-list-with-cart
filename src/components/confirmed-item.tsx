interface ConfirmedItemProps {
	thumbnail: string
	name: string
	price: number
	quantity: number
}

export default function ConfirmedItem({
	thumbnail,
	name,
	price,
	quantity,
}: ConfirmedItemProps) {
	return (
		<div className="confirmed-item">
			<div className="confirmed-item__details">
				<img src={thumbnail} alt={name} />
				<div className="confirmed-item__info">
					<h4 className="confirmed-item__name">{name}</h4>
					<div className="confirmed-item__amount">
						<p className="confirmed-item__quantity">{quantity}x</p>
						<p className="confirmed-item__price">@ ${price.toFixed(2)}</p>
					</div>
				</div>
			</div>
			<p className="confirmed-item__total">${(price * quantity).toFixed(2)}</p>
		</div>
	)
}
