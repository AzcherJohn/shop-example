import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Button from "../UI-kit/Button";
import InputText from "../UI-kit/InputText";

export default function AddProductForm(props){
   const appCont = useContext(AppContext);

   return<>
      <form className={`${appCont.isDarkTheme ? "bg-zinc-500 text-white" : "bg-zinc-300"} grid px-4 py-7 rounded gap-5 my-6`} onSubmit={props.onFormSubmit}>
         <label className="grid gap-2">
            Name:
            <InputText placeholder="Enter the name" error={props.validation && !props.name} value={props.name} onChange={e => props.onSetName(e.target.value)}></InputText>
         </label>
         <label className="grid gap-2">
            Description:
            <InputText placeholder="Enter the description" error={props.validation && !props.description} value={props.description} onChange={e => props.onSetDescription(e.target.value)}></InputText>
         </label>
         <div className="flex justify-between items-center">
            <div className={`${appCont.isDarkTheme ? "text-orange-400" : "text-red-500"}`}>{props.validation}</div>
            <Button className="btn-primary" type="submit">Add Product</Button>
         </div>
      </form>
   </>
}