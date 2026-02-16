import data from "./data/data.json";
import List from "./components/list";
import Cart from "./components/cart";

function App() {


  return (
    <main>
      <section className="container">
        <h1 className="heading">Desserts</h1>
        <List products={data} />
      </section>
      <Cart />
    </main>
  )
}

export default App
