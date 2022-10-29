import clsx from "clsx";
import { useEffect, useState } from "react";
import Button from "../Button";

export default function Modal(props){
   const {header, footer, children, show, onClose} = props;
   const [isClose, setIsClose] = useState(false);
   const [headerStatic, setHeaderStatic] = useState("");

   const classModal = clsx({
      "hidden": !show,
      "animate-fade-in": !isClose,
      "animate-fade-out": isClose,
   },
   "w-screen h-screen bg-slate-900/40 fixed top-0 left-0 z-50 flex justify-center items-center"
   );

   useEffect(() => {
      setHeaderStatic(header);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [show]) 

   function handleCloseModalClick(){
      setIsClose(true);
   };
   return <>
      <div name="bg-dialog" className={classModal}
         onAnimationEnd={() => {
               if (isClose) {
                  onClose(false);
                  setIsClose(false);
               }
            }}
            onClick={handleCloseModalClick}
      >
         <div name="dialog" onClick={e => e.stopPropagation()} className="w-full mx-5 lg:w-1/2 mt-14 bg-slate-200 dark:bg-slate-500 rounded-lg flex flex-col gap-3 px-7 py-6">
            <header name="header-dialog" className="min-h-[2rem] flex justify-between items-center">
               <h1>{headerStatic}</h1>
               <span>
                  <Button category="action-delete" onClick={handleCloseModalClick}>x</Button>
               </span>
            </header>

            <div className="border border-slate-700"/>

            <main name="body-dialog" className="max-h-[70vh] overflow-auto p-1">
               {children}
            </main>

            {footer && <footer name="footer-dialog">
               {footer}
            </footer>}
         </div>
      </div>
   </>
}