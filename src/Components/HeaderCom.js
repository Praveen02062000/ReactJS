// import "../styles/header.css"
// import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";

// function HeaderCom() {
//     let [count, setcount] = useState([])
//     const [name, setname] = useState(["praveen", "kumar", "sachin"])


//     // async function DataHandle() {
//     //     const data = await fetch("https://fakestoreapi.com/products")
//     //     const resdata = await data.json()
//     //     setcount(resdata)
//     // }

//     function AlertProduct(id) {
//         const find = count.find((value) => {
//             return value.id === id
//         })
//         alert(find.title)
//     }


//     // useEffect(() => {
//     //     DataHandle()

//     // }, [])

//     return (
//         <div className="header">
//             {count.map((value) => {
//                 return <ProductCard
//                     key={value.id}
//                     productname={value.title}
//                     image={value.image}
//                     price={value.price}
//                     id={value.id}
//                     alerts={AlertProduct}
//                 />
//             })}
//         </div>
//     )
// }


// export default HeaderCom