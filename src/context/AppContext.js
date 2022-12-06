/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

let toastTotal = 0;

function AppProvider(props){
   const [isDarkTheme, setDarkTheme] = useState(() =>{
      const preferences = localStorage.getItem("preferences");
      if (preferences) return JSON.parse(preferences).isDarkTheme;
      else return window.matchMedia("(preders-color-scheme: dark)").matches;
   });

   //! Status = 0: close, status = 1: open, status = 2, inactive
   const [showSidebar, setShowSidebar] = useState(2);
   const [toastList, setToastList] = useState([]);

   //* Theme
   useEffect(() => {
      if (isDarkTheme) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
   },[]);

   function handleThemeDark(){
      if (isDarkTheme) {         
         document.body.classList.remove("dark");
      } else {         
         document.body.classList.add("dark");
      }
      setDarkTheme(dark => {
         localStorage.setItem("preferences",JSON.stringify({isDarkTheme:!dark}))
         return !dark
      });
      
   }
   //* End Theme
   //* Sidebar
   function handleCloseSidebar(){
      if (showSidebar === 1 )
         setShowSidebar(0);
   }
   function handleOpenSidebar(){
      setShowSidebar(1);
   }
   function handleDefaultSidebar(){
      setShowSidebar(2);
   }
   //* End Sidebar
   //* Image
   function getImage(name){
      return require("../img/" + name); 
   }
   //* End Image
   //* Toast
   function handleAddToast(toast){
      const id = toastTotal++;
      const newToast = {...toast, id:id};
      setToastList([...toastList, newToast]);
   }
   function handleCloseToast(id){
      setToastList(toastList.filter((toast) => toast.id !== id));
   }
   //* EndToast
   
   /*useEffect(() => {
      if (showSidebar === 0) {    
         const timer = setTimeout(() => {
            setShowSidebar(2);
         }, 300);
         return () => clearTimeout(timer);
      }
   },[showSidebar])*/

   const value = {
      isDarkTheme,
      showSidebar,
      toastList,
      getImage,
      onThemeDark: handleThemeDark,
      onCloseSidebar: handleCloseSidebar,
      onOpenSidebar: handleOpenSidebar,
      onDefaultSidebar: handleDefaultSidebar,
      onAddToast: handleAddToast,
      onCloseToast:handleCloseToast
   }

   return<>
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   </>;
}

export {AppContext, AppProvider}