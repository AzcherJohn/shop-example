import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

import { addProduct, removeProduct } from "../../store/productsStore";

import Button from "../../UI-kit/Button";
import InputNumber from "../../UI-kit/InputNumber";

export default function ProductDetail({onProductView, children}){
   const params = useParams();
   const appContext = useContext(AppContext);
   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);
   const productFromCart = cart.find(prod => prod.id === parseInt(params.id));
   const [product, setProduct] = useState({});
   const [quantity, setQuantity] = useState(productFromCart ? parseInt(productFromCart.quantity) : 1);


   useEffect(() => {
      const products = JSON.parse(localStorage.getItem("products"));
      const newProduct = products.find(prod => prod.id === parseInt(params.id));

      setProduct(newProduct);
      onProductView(newProduct);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   function handleDeleteClick(){      
      dispatch(removeProduct(product));
      appContext.onAddToast({severity:"warn", summary:"Product removed to cart", detail: "You removed a item from you cart"})
   }
   function handleAddProductClick(){
      dispatch(addProduct({
         id: product.id,
         name: product.name,
         img: product.img,
         price: product.price, 
         quantity:quantity
      }))
      appContext.onAddToast({severity:"success", detail:"Your product has been successfully added", summary:"Product added to cart"})
   }

   return <>
      <section>
         <Link to="/products" className="primary-link" state={{title:"Products"}}>{"<"} Back products</Link>
         <section className="flex flex-col lg:flex-row w-full gap-5 justify-between mt-4">
            <section className="flex flex-auto gap-9 flex-col items-center sm:flex-row sm:justify-center">
               <figure>
                  {productFromCart && 
                     <Button 
                        category="action-delete" 
                        onClick={handleDeleteClick}
                        className="relative top-5 -right-[15.5rem]"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                     </Button>
                  }
                  {product.img && <img className="product-image-big" src={appContext.getImage(product.img)} alt={product.name + "_Image"} />}
               </figure>
               <section className="flex flex-col gap-4">               
                  <h1 className="text-2xl font-semibold">{product.name}</h1>
                  <h5 className="text-xl font-medium">${product.price ?? "10"}</h5>
                  <InputNumber buttons value={quantity} max={product.quantity} min="1" onValueChange={e => setQuantity(e)} />
                  <Button 
                     category="btn-primary" 
                     onClick={handleAddProductClick}
                  >
                     Add to cart
                  </Button>
               </section>
            </section>
            <section className="flex-auto">
               <nav className="flex gap-5 border-b-[1px] border-slate-400 px-4 pb-1">               
                  <NavLink end className={({ isActive }) => isActive ? "active-nav" : "primary-link"} state={{title: product.name, nested: true}} to=".">Description</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : "primary-link"} state={{title: product.name, nested: true}} to="storage">Storage</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active-nav" : "primary-link"} state={{title: product.name, nested: true}} to="nutrition">Nutrition</NavLink>
               </nav>

               {children}

            </section>         
         </section>
      </section>
   </>
}