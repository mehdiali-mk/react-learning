import './App.css'
import ProductList from "./ProductList"
import productDetails from "./ProductDetails.js"

function App() {

  return (
    <div className="master-div">
      <ProductList productDetails={productDetails} />
    </div>
  )
}

export default App
