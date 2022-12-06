import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";



import Button from "../Button";

export default function ToastCard({toast}) {
   const [isClose, setIsClose] = useState(false);
   const appContext = useContext(AppContext);
   const {severity, summary, id, detail, life, stay} = toast;
   const type = () => {
      if (severity && (severity.toLowerCase() === "info" || severity.toLowerCase() === "warn" || severity.toLowerCase() === "error"))
         return severity.toLowerCase();
      else return "success";
   };

   function handleCloseToastClick(){
      setIsClose(true);
   };

   useEffect(() => {
      if (!stay) {
         const timer = setTimeout(() => {
            setIsClose(true);
         }, life ?? 3000);
         return () => clearTimeout(timer);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   
   const classesToast = clsx({
      "border-emerald-500 bg-emerald-200 text-emerald-700": type() === "success",
      "border-sky-500 bg-sky-200 text-sky-700": type() === "info",
      "border-amber-500 bg-amber-200 text-amber-700": type() === "warn",
      "border-red-500 bg-red-200 text-red-700": type() === "error",
      "animate-tabs-in": !isClose,
      "animate-fade-out": isClose,
   },
   "flex w-80 rounded-xl min-h-[5rem] border-l-8 shadow-lg dark:shadow-stone-500 justify-around items-center opacity-90 gap-2",
   );
   const icon = () => {
      switch(type()){
         case "success":
            return "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
         case "info":
            return "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z";
         case "warn":
            return "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z";
         case "error":
            return "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
         default:
            return"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
      }
   }
   return <>
      <div 
         className={classesToast} 
         name="toast-card"
         onAnimationEnd={() => {
            if (isClose) {
               appContext.onCloseToast(id);
            }
         }}
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 stroke-2 flex-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d={icon()} />
         </svg>
         <div className="flex-auto">
            <h3 className="font-bold">{summary}</h3>
            <p>{detail}</p>
         </div>
         <span className="flex-1 flex justify-end mr-4">
            <Button category="action-toggle" onClick={handleCloseToastClick}>x</Button>
         </span>
      </div>
   </>
}