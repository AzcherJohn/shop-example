import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

export default function ProductDetail(){
   const [product, setProduct] = useState({});
   const params = useParams();

   useEffect(() => {
      const products = JSON.parse(localStorage.getItem("products"));

      setProduct(products.find(prod => prod.id === parseInt(params.id)))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   return <>
      <div className="grid gap-4">
         <Link to="/">{"<"} Back home</Link>
         <h1 className="text-2xl font-semibold">{product.name}</h1>
         <p>{product.description}</p>
         <h5 className="text-xl font-medium">${product.price ?? "10"}</h5>
         <img src={product.img} alt={product.name + "_Image"} ></img>
         <p>View the <Link to="notes">notes for this product</Link></p>

         <Outlet />
      </div>
   </>
}