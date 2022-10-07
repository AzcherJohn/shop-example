import { useState } from "react";
import ProductCard from "./ProductCard";

export default function StoreFront(){
   // eslint-disable-next-line no-unused-vars
   const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) ?? []);

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         {products.length > 0
         ? 
         products.map(product => <ProductCard details={product} key={product.id} />)
         :
         <p>No products yet</p>
         }
         
      </div>
   );
}