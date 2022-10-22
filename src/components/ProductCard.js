import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import Button from "../UI-kit/Button";

export default function ProductCard(props){
   const {img, name, description, id} = props.details;
   const [count, setCount] = useState(0);
   const appCont = useContext(AppContext);

   function handleAddClick(){
      setCount(prevCount => prevCount + 1);
   }
   function handleReniveClick(){
      if (count > 0)
         setCount(prevCount => prevCount - 1);
   }

   return <>
      <Link to={"/products/" + id} className="h-[92px]">
         <article className="dark:bg-zinc-500 bg-zinc-300 rounded flex gap-5 px-3 py-2 justify-between items-center">
            <img src={appCont.getImage(img)} alt={name + "Image"} className="product-image"></img>
            <div className="flex-1">
               <h2 className="text-xl font-semibold">{name}</h2>
               <p>{description.substring(0,30)} {description.length > 30 && "..."}</p>
            </div>
            <div className="-my-3 -mx-3 flex flex-col items-center justify-center">
               <Button category="action-remove" disabled={count <= 0} onClick={handleReniveClick}>-</Button>
               <span className="h-7">{count > 0 && count}</span>
               <Button category="action-add" onClick={handleAddClick}>+</Button>
            </div>
            
         </article>
      </Link>
   </>
}