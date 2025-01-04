import Title from "./Title";
import Description from "./Description";
import "./ProductDetails"

function ProductDetails({productTitle, productDescription}) {
    return (
        <div className="product-details">
            <Title productTitle={productTitle}  />
            <Description productDescription={productDescription} />
        </div>
    )
}

export default ProductDetails