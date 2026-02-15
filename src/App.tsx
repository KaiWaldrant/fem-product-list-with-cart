import data from "./data/data.json";
import List from "./components/list";


function App() {


  return (
    <main>
      <h1>Desserts</h1>
      <div>
        <List products={data} />
        <div className="cart"></div> {/* placeholder */}
      </div>
    </main>
  )
}

export default App
