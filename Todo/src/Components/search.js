import React from 'react';
import { useSearchParams } from "react-router-dom"


function search() {
    const searchparam = useSearchParams()

    console.log(searchparam)
    return (
        <div>search</div>
    )
}

export default search