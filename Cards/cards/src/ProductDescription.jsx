import "./ProductDescription.css"

function ProductDescription({productDescription}) {
    return (
        <div className="product-description-list">
            <p className="product-description">{productDescription[0]}</p>
            <p className="product-description">{productDescription[1]}</p>
        </div>
    )
}

export default ProductDescription