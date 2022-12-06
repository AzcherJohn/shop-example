import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { cartCountSelector } from "../store/productsStore";

import Button from "../UI-kit/Button";

const menu = [
   {title:"Home",path:"/"},
   {title:"How To",path:"how-to"},
   {title:"Products",path:"products"},
   {title:"Dashboard",path:"dashboard"},
]

export default function Navbar(){
   const [endAnimation, setEndAnimation] = useState(true);
   const appCont = useContext(AppContext);
   const count = useSelector(cartCountSelector);
   
  const location = useLocation();

  useEffect(() => {
   if (location.state) {      
      document.title = `${location.state.title} | Azcher Shop`;
   } else {
      document.title = `Azcher Shop`;
   }
  },[location])

   useEffect(() => {
      if (appCont.showSidebar !== 1) {
         document.body.style.overflow = "auto";
         /*const timer = setTimeout(() => {
            setEndAnimation(true);
         }, 180);
         return () => clearTimeout(timer);*/
      } else {
         document.body.style.overflow = "hidden";
         setEndAnimation(false);
      }
   },[appCont.showSidebar]);

   const classNavbar = clsx({
      "animate-in-bottom overflow-auto": appCont.showSidebar === 1,
      "animate-in-top": appCont.showSidebar === 0,
      "hidden": endAnimation,
   },
   "fixed flex flex-col items-start gap-6 right-0 px-6 w-full py-6 bottom-0 top-14 bg-slate-200",
   "dark:bg-slate-700",
   "lg:bg-white lg:h-auto lg:flex-row lg:top-auto lg:right-auto lg:py-0 lg:px-0 lg:relative lg:flex-1 lg:flex lg:gap-5 xl:gap-12 lg:mx-9 lg:justify-end lg:items-center",
   "lg:dark:bg-slate-800",
   );

   function handleCleanLocalStorageClick(){
      localStorage.clear();
      window.location.reload(false);
   }

   return (
      <nav className="flex justify-between">
         <figure>
            <figcaption>
               <Link to="/" state={{title:"Home"}}>
                  <h1 className="text-2xl font-extrabold tracking-wider">Azcher<span className="text-teal-700">Shop</span></h1>
               </Link>
            </figcaption>
         </figure>
         <div className={classNavbar}
            onAnimationEnd={() => {
               if (appCont.showSidebar === 0) appCont.onDefaultSidebar();
               if (appCont.showSidebar !== 1) setEndAnimation(true);
            }}
         >
            <hr className="lg:hidden"/>
            {
               menu.map(element => 
                  <NavLink 
                     key={element.path}
                     onClick={() => appCont.onCloseSidebar()} 
                     className={({ isActive }) => isActive ? "active-nav" : "primary-link"}
                     state={{title:element.title}}
                     end={element.path === "/"} 
                     to={element.path}>
                        {element.title}
                  </NavLink>   
               )
            }
            <hr className="lg:hidden"/>
            <Button category="action-toggle" className="self-center" onClick={() => appCont.onThemeDark()}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black dark:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
               </svg>
            </Button>
            <Button category="btn-primary" className="self-center" onClick={handleCleanLocalStorageClick}>
               Clean Information
            </Button>
            <Link to="cart" className="btn-cart self-center" state={{title:"Cart"}}>Cart ({count})</Link>
         </div>
         <div className="flex justify-end w-full lg:hidden">
            <Button category="action-toggle" onClick={() => appCont.showSidebar === 2 ? appCont.onOpenSidebar() : appCont.onCloseSidebar()}>
               <div className="h-full w-auto flex flex-col justify-around items-center">
                  <span className={"dark:bg-slate-200 bg-slate-600 h-[0.12rem]" + (appCont.showSidebar === 1 ? " animate-cross-start-top w-5 -ml-1" : " animate-cross-destroy-top w-4")}></span>
                  <span className={"dark:bg-slate-200 bg-slate-600 h-[0.12rem]" + (appCont.showSidebar  === 1 ? " transition-opacity opacity-0 duration-200 self-end" : " transition-opacity opacity-1 duration-200 w-4")}></span>
                  <span className={"dark:bg-slate-200 bg-slate-600 h-[0.12rem]" + (appCont.showSidebar  === 1 ? " animate-cross-start-bottom w-5 -ml-1" : " animate-cross-destroy-bottom w-4")}></span>
               </div>
            </Button>
         </div>
         <aside>

         </aside>
      </nav>
   );
}