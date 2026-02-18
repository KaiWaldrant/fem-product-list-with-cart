import { useRef, useState } from "react"
import Cart from "./components/cart"
import ConfirmedModal from "./components/confirmed-modal"
import ItemCard from "./components/item-card"
import data from "./data/data.json"
import type { CartType } from "./types/cart"
import type { Product } from "./types/json"

function App() {
	const [cart, setCart] = useState<CartType>({})

	const productLookup = data.reduce(
		(acc, product) => {
			acc[product.name] = product
			return acc
		},
		{} as Record<string, Product>,
	)

	const updateCartQuantity = (productName: string, change: number) => {
		const currentQuantity = cart[productName]?.quantity || 0
		const newQuantity = currentQuantity + change

		if (newQuantity > 0) {
			setCart((prevCart) => ({
				...prevCart,
				[productName]: { quantity: newQuantity },
			}))
		} else if (newQuantity === 0) {
			setCart((prevCart) => {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { [productName]: _, ...rest } = prevCart
				return rest
			})
		}
	}

	const confirmedModalRef = useRef<HTMLDialogElement>(null)

	const openConfirmedModal = () => {
		confirmedModalRef.current?.showModal()
	}

	const clearCart = () => {
		setCart({})
	}

	return (
		<main>
			<section className="container">
				<h1 className="heading">Desserts</h1>
				<div className="product-list">
					{data.map((product) => (
						<ItemCard
							key={product.name}
							product={product}
							cart={cart}
							updateCartQuantity={updateCartQuantity}
						/>
					))}
				</div>
			</section>
			<Cart
				productLookup={productLookup}
				cart={cart}
				updateCartQuantity={updateCartQuantity}
			/>
			<ConfirmedModal
				reference={confirmedModalRef}
				productLookup={productLookup}
				cart={cart}
				clearCart={clearCart}
			/>
		</main>
	)
}

export default App
