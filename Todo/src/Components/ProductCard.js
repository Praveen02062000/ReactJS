import "../styles/header.css";
import { useNavigate } from "react-router-dom";



function ProductCard({ productname, image, price, id }) {


    const navigate = useNavigate();


    function navigateProduct(id) {
        // navigate("/product/"+id)
        navigate(`/product/${id}/${productname}/${price}`)
    }


    return (
        <div className="product">
            <img src={image} />
            <h4>{productname}</h4>

            <p>Price : {price} $</p>
            <button onClick={() => { navigateProduct(id) }}>Buy Now</button>
        </div>
    )
}


export default ProductCard