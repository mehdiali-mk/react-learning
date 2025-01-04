import ProductDetails from "./ProductDetails"
import Icon from "./Icon"
import "./Product.css"


function Product({iconName = "M",productTitle="Product Title!", productDescription = "Product Description!!!", features = ["ASDF"]}) {

    return (
        <div className="product">
            <Icon iconName={iconName} />
            <ProductDetails productTitle={productTitle} productDescription={productDescription}/>
            <div>{features.map((feature) => <li>{feature}</li>)}</div>
        </div>
    )
}

export default Product