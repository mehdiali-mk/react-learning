import "./ProductPrice.css"

function ProductPrice({productPrice}) {

    return (
        <div className="product-price">
            <div className="old-price">₹ {productPrice[0]}</div>
            <div className="new-price">₹ {productPrice[1]}</div>
        </div>
    )
}

export default ProductPrice