import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "../../API/axios";
function NewArrivals() {
 const[products, setProducts]= useState([])
   const getProducts= async()=>{
     try { 
         const resp= await axios.get("/api/product/viewAll-product")
         setProducts(resp.data)
         
     } catch (error) {
         
     }
   }
   useEffect(()=>{
    getProducts()
   },[])
  return  <div className="w-full flex flex-col my-4 justify-center">
    <center><button className="btn btn-outline-secondary w-fit bg-slate-600">View Products</button></center>
    <div className="w-full flex   gap-2 flex-col my-4">
                <h5 className="ml-10">New Arrivals</h5>
                <div
            className="arrivals-container"
            >
            {products.length>0?products?.map((product, index) => (
                <ProductCard
                product={product}
                key={product.name}
                />
            )):<p className="netflix-no-content">No Product found.</p>}
            </div> 
  </div>
  </div>
   
}

export default NewArrivals