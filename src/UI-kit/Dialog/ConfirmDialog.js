import clsx from "clsx";
import { useState } from "react";
import Button from "../Button";

export default function ConfirmDialog(props){
   const {message, show, onClose, onAccept, onReject} = props;
   const [isClose, setIsClose] = useState(false);

   const classModal = clsx({
      "hidden": !show,
      "animate-fade-in": !isClose,
      "animate-fade-out": isClose,
   },
   "w-screen h-screen bg-slate-900/40 fixed top-0 left-0 z-50 flex justify-center items-center"
   );

   function handleCloseModalClick(){
      setIsClose(true);
   };
   function handleRejectClick(){
      handleCloseModalClick();
      onReject();
   };
   function handleAcceptClick(){
      handleCloseModalClick();
      onAccept();
   };
   return <>
      <div name="confirm-bg-dialog" className={classModal}
         onAnimationEnd={() => {
               if (isClose) {
                  onClose(false);
                  setIsClose(false);
               }
            }}
            onClick={handleCloseModalClick}
      >
         <div name="confirm-dialog" onClick={e => e.stopPropagation()} className="w-full mx-5 lg:max-w-[28rem] mt-14 bg-slate-200 dark:bg-slate-500 rounded-lg flex flex-col gap-5 px-7 py-6">
            <header name="header-dialog" className="min-h-[2rem] flex justify-between items-center">
               <h1>Attention!</h1>
               <span>
                  <Button category="action-delete" onClick={handleCloseModalClick}>x</Button>
               </span>
            </header>

            <div className="border border-slate-700"/>

            <main name="body-dialog" className="max-h-[70vh] overflow-auto flex gap-3 p-1">
               <div className="flex-1 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
               </div>
               <div className="flex-auto">{message}</div>
            </main>

            <footer name="footer-dialog" className="flex justify-end gap-5">
               <Button category="btn-secundary" onClick={handleRejectClick}>No</Button>
               <Button category="btn-primary" onClick={handleAcceptClick}>Yes, continue</Button>
            </footer>
         </div>
      </div>
   </>
}