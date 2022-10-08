import clsx from "clsx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function InputText(props){
   const {type, ...att} = props;
   const appCont = useContext(AppContext);

   const className = clsx({
      "bg-stone-200/60": props.disabled,
      "border-red-600": props.error && !appCont.isDarkTheme,
      "border-orange-500": props.error && appCont.isDarkTheme,
      "bg-gray-600": appCont.isDarkTheme,
   })
   return<input type={type && "text"} {...att} className={`p-2 border rounded-md border-slate-400 hover:border-cyan-500 ${className}`}></input>
}