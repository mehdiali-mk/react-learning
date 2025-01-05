import ProductPrice from "./ProductPrice"
import ProductContent from "./ProductContent"
import "./Product.css"

function Product({productDetails}) {
    console.log(productDetails)
    return (
        <div className="product">
            <ProductContent productTitle={productDetails[0]} productDescription={productDetails[1]}/>
            <ProductPrice productPrice={productDetails[2]}/>
        </div>
    )
}

export default Product