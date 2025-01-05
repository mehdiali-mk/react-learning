import Product from "./Product";
import "./ProductList.css"


function ProductList({productDetails}) {
    return (
        <div className="product-list">
            <Product productDetails={productDetails[0]} />
            <Product productDetails={productDetails[1]} />
            <Product productDetails={productDetails[2]} />
            <Product productDetails={productDetails[3]} />
        </div>
    )
}

export default ProductList