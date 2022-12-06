import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

export default function StoreFront(){
   const [products, setProducts] = useState( []);
   const cart = useSelector(state => state.cart);

   useEffect(() => {
      setProducts(() => JSON.parse(localStorage.getItem("products")) ?? [])
   },[])

   return (<>
      <section>
         <div className="flex justify-center items-center border border-b-slate-400 mb-4 pb-4 gap-7">
            <h1>Products Store</h1>
            <h3>(Actual products: {products.length})</h3>
         </div>
         <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 content-start">
            {
            products.length > 0 ?          
               products.map(product => 
                  <ProductCard 
                     details={product} 
                     key={product.id} 
                     inCart={cart.find(prod=> prod.id === product.id)} 
                  />
               )
            :
               <p>No products yet</p>
            }
            
         </section>
      </section>
   </>);
}