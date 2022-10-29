import clsx from "clsx";
import { useState } from "react";
import Button from "./Button";

export default function Toast() {
   const [isShow, setIsShow] = useState(true);
   const classesToast = clsx({
      "hidden": !isShow,
   },
   "w-80 rounded-xl min-h-[5rem] border-l-8 border-emerald-500 bg-emerald-200 fixed z-20 right-5 shadow-lg flex justify-around items-center"
   );
   return <>
      <aside className={classesToast}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 stroke-2 flex-1 text-emerald-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
         </svg>
         <div className="flex-auto">
            <h3 className="font-bold text-emerald-700">Header toast</h3>
            <p className="text-emerald-700">Message toast</p>
         </div>
         <span className="flex-1 flex justify-end mr-4">
            <Button category="action-toggle" onClick={() => setIsShow(false)}>x</Button>
         </span>
      </aside>
   </>
}