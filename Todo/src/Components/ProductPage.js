import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const param = useParams();



    return (
        <div>
            <h1>{param.productname}</h1>
            <h2>price {param.productprice}</h2>
        </div>
    )
}

export default ProductPage