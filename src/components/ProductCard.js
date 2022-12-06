import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppContext } from "../context/AppContext";
import { addProduct, removeProduct } from "../store/productsStore";

import Button from "../UI-kit/Button";

export default function ProductCard(props){
   const {img, name, description, id, quantity, price} = props.details;
   const [count, setCount] = useState(props.inCart ? props.inCart.quantity : 0);
   const [isInCart, setIsInCart] = useState(props.inCart);

   const appCont = useContext(AppContext);
   const dispatch = useDispatch();

   function handleAddClick(){
      if (count < parseInt(quantity))
         setCount(prevCount => prevCount + 1);
   }
   function handleSubtractClick(){
      if (count > 0)
         setCount(prevCount => prevCount - 1);
   }
   function handleAddCartClick() {
      dispatch(addProduct({         
         id: id,
         name: name,
         img: img,
         price: price, 
         quantity: count
      }));
      setIsInCart(true);
      appCont.onAddToast({severity:"success", detail:"Your product has been successfully added", summary:"Product added to cart"})
   }
   function handleRemoveCartClick(e) {
      e.preventDefault();
      dispatch(removeProduct(props.details));
      setCount(0);
      setIsInCart(false);
      appCont.onAddToast({severity:"warn", summary:"Product removed to cart", detail: "You removed a item from you cart"})
   }

   return <>
      <article className="dark:bg-zinc-500 bg-zinc-300 rounded h-[120px] flex gap-4 justify-between items-center">
         <Link to={"/products/" + id} state={{title:name}} className="flex gap-4 pl-3 py-2 justify-between items-center flex-1 h-full">
            <figure>
               <img src={appCont.getImage(img)} alt={name + "Image"} className="product-image"></img>
               { isInCart &&
                  <figcaption className="flex justify-center">                  
                     <Button category="action-delete" onClick={e => handleRemoveCartClick(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                     </Button>
                  </figcaption>
               }
            </figure>
            
            <div className="flex-1 h-full">
               <h2 className="text-xl font-semibold mb-1">{name}</h2>
               <p>{description.substring(0,30)} {description.length > 30 && "..."}</p>
            </div>
         </Link>
         <div className="">
            <h2 className="text-lg font-semibold mb-3">${price}</h2>
            <Button category="btn-primary" disabled={count <= 0} onClick={handleAddCartClick}>Add</Button>
         </div>
         <div className="flex flex-col items-center justify-between h-full" onClick={e => e.stopPropagation()}>
            <Button category="action-remove" disabled={count <= 0} onClick={handleSubtractClick}>-</Button>
            <span className="h-9 bg-white dark:bg-slate-700 w-full rounded-xl flex justify-center items-center">{count > 0 && count}</span>
            <Button category="action-add" onClick={handleAddClick} disabled={count >= parseInt(quantity)}>+</Button>
         </div>
            
      </article>
   </>
}