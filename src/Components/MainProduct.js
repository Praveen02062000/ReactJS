import { useState } from "react";
import "../styles/header.css"
import ProductCard from "./ProductCard"
function MainProduct() {

    const [productData, setProductData] = useState(
        [
            {
                id: 1,
                img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYqPXvB9jtHaxkTkijhLcC2D9jQRAT8U9M1fD6Ez9EzXoCIsQBF8sU5cvBCQMX97aMVpJ8ZRVZvshrqWhmkYv5z3_F0jj2E87rd_rON-jhw_GOq4I5bFXTPak",
                title: "Family",
                price: 500

            },
            {
                id: 2,
                img: "https://images.meesho.com/images/products/165031445/acxqa_1200.jpg",
                title: "Group Frame",
                price: 250

            },
            {
                id: 3,
                img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgED9rf0KhZiGBtRcI_Ic_WyoJ-SEs_JObHLW4pS8dI07y-QNqwKOjDMMfew7xKXIWCdBMBqUMmasqme10-1SJDAQxSnek-vxokq35KZcYSDRSmObgX_CXzA",
                title: "Birthday Gift Frame",
                price: 300

            },
            {
                id: 4,
                img: "https://m.media-amazon.com/images/I/715gVnLjQfL._AC_UF894,1000_QL80_.jpg",
                title: "Hall Frame",
                price: 450

            }
        ]
    )




    return (
        <div className="mainproduct">
            <h1>Photo Frame</h1>
            <div className="main">
                {
                    productData.map((product) => {
                        return <ProductCard
                            key={product.id}
                            image={product.img}
                            productname={product.title}
                            price={product.price}
                        />
                    })
                }
            </div>

        </div>
    )
}


export default MainProduct