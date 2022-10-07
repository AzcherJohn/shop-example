import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Button from "../UI-kit/Button";

export default function ProductCard(props){
   const {image, name, description} = props.details;
   const [count, setCount] = useState(0);
   const appCont = useContext(AppContext)

   function handleAddClick(){
      setCount(prevCount => prevCount + 1);
   }
   function handleReniveClick(){
      if (count > 0)
         setCount(prevCount => prevCount - 1);
   }

   return <>
      <div className={`${appCont.isDarkTheme ? "bg-zinc-500 text-white" : "bg-zinc-300"} rounded flex gap-5 p-3 justify-between items-center`}>
         <img src={image} alt={name + "Image"} className="h-14 "></img>
         <div className="flex-1">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>{description}</p>
         </div>
         <div className="-my-3 -mx-5 flex flex-col items-center justify-center">
            <Button className="action-remove" disabled={count <= 0} onClick={handleReniveClick}>-</Button>
            <span className="h-7">{count > 0 && count}</span>
            <Button className="action-add" onClick={handleAddClick}>+</Button>
         </div>
         
      </div>
   </>
}