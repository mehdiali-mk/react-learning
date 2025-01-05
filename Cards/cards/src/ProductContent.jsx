import ProductTitle from "./ProductTitle"
import ProductDescription from "./ProductDescription"
import "./ProductContent.css"


function ProductContent({productTitle, productDescription}) {
    return (
        <div className="product-content">
            <ProductTitle productTitle={productTitle}/>
            <ProductDescription productDescription={productDescription} />
        </div>
    )
}

export default ProductContent