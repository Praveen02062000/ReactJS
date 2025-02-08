import "../styles/header.css"

function ProductCard({ productname, image, price, id }) {
    return (
        <div className="product">
            <img src={image} />
            <h4>{productname}</h4>

            <p>Price : {price} $</p>
            <button>Buy Now</button>
        </div>
    )
}


export default ProductCard