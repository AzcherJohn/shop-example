import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

export default function StoreFront(){
   // eslint-disable-next-line no-unused-vars
   const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) ?? []);

   const appCont = useContext(AppContext);

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         {products.length > 0
         ? 
         products.map(product => <ProductCard details={product} key={product.id} />)
         :
         <p className={appCont.isDarkTheme && "text-white"}>No products yet</p>
         }
         
      </div>
   );
}