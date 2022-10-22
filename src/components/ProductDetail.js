import { useContext, useEffect, useState } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Button from "../UI-kit/Button";
import InputNumber from "../UI-kit/InputNumber";

export default function ProductDetail({onProductView}){
   const [product, setProduct] = useState({});
   const params = useParams();
   const appCont = useContext(AppContext);

   useEffect(() => {
      const products = JSON.parse(localStorage.getItem("products"));
      const newProduct = products.find(prod => prod.id === parseInt(params.id));

      setProduct(newProduct);
      onProductView(newProduct);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   return <>
      <section>
         <Link to="/products" className="primary-link">{"<"} Back products</Link>
         <section className="flex flex-col lg:flex-row w-full gap-5 justify-between mt-4">
            <section className="flex flex-auto gap-9 flex-col items-center sm:flex-row sm:justify-center">
               <figure>
                  {product.img && <img className="product-image-big" src={appCont.getImage(product.img)} alt={product.name + "_Image"} />}
               </figure>
               <section className="flex flex-col gap-4">               
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <h5 className="text-xl font-medium">${product.price ?? "10"}</h5>
                  <InputNumber buttons value={0} />
                  <Button category="btn-primary">Add to cart</Button>
               </section>
            </section>
            <section className="flex-auto">
               <nav className="flex gap-5 border-b-[1px] border-slate-400 px-4">               
                  <NavLink end className={({ isActive }) => isActive ? "active-nav" : "primary-link"} to=".">Description</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : "primary-link"} to="storage">Storage</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : "primary-link"} to="nutrition">Nutrition</NavLink>
               </nav>
               <div className="py-4 px-1">
                  <Outlet />
               </div>
            </section>         
         </section>
      </section>
   </>
}