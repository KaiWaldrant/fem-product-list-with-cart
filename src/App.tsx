import data from "./data/data.json";
import List from "./components/list";


function App() {


  return (
    <main>
      <section className="container">
        <h1 className="heading">Desserts</h1>
        <List products={data} />
      </section>
        <div className="cart"></div> {/* placeholder */}
    </main>
  )
}

export default App
