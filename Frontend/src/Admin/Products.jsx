import React, { useEffect, useState } from 'react'
import ProductDisplay from './components/ProductDisplay'
import axios from 'axios';

function Products() {
    const [response,setResponse]=useState([]);

    const fetchProducts = async () => {
        try {
            const res = (await axios.get("http://localhost:5000/api/v1/product/get-all-products")).data.data;
            setResponse(res);
            console.log("response : ", res);
        } catch (error) {
            console.log("There is some error in fetching products ", error);
        }
    };

    useEffect(()=>{
     fetchProducts();
    },[])
  return (
   <>
   <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 mt-8">
                   All Products
                </h2>
   {
    response.map((p)=>
        <ProductDisplay product={p} key={p._id} refreshProducts={fetchProducts}/>
    )
   }
   </>
  )
}

export default Products