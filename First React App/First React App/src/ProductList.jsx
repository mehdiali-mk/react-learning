import Product from "./Product.jsx";
import "./ProductList.css"

function ProductList() {
    const featuresArray = ["Feature 1", "Feature 2", "Feature 3"]
    return (
        <div className="product-list">
            <Product iconName="A" productTitle="Product A" productDescription="Product Description A" features={featuresArray}  />
            <Product iconName="B" productTitle="Product B" productDescription="Product Description B"  />
            <Product iconName="C" productTitle="Product C" productDescription="Product Description C" />
        </div>
    )
}

export default ProductList