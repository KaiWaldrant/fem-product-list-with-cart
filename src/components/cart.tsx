import IllustrationEmptyCart from "../assets/icons/illustration-empty-cart";

export default function Cart() {
  return (
    <section className="cart__container">
      <h2 className="cart__heading">Your Cart (0)</h2>
      <div className="cart__items">
        {/* placeholder */}
        <IllustrationEmptyCart />
        <p className="placeholder">Your added items will appear here</p>
      </div>
    </section>
  );
}