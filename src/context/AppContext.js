import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider(props){
   const [isDarkTheme, setDarkTheme] = useState(false);
   // Status = 0: close, status = 1: open, status = 2, inactive
   const [showSidebar, setShowSidebar] = useState(2);

   function handleThemeDark(){
      if (isDarkTheme) {         
         document.body.classList.remove("dark");
      } else {         
         document.body.classList.add("dark");
      }
      setDarkTheme(dark => !dark);
   }

   function handleCloseSidebar(){
      if (showSidebar === 1 )
         setShowSidebar(0);
   }
   function handleOpenSidebar(){
      setShowSidebar(1);
   }
   function getImage(name){
      return require("../img/" + name); 
   }
   
   useEffect(() => {
      if (showSidebar === 0) {    
         const timer = setTimeout(() => {
            setShowSidebar(2);
         }, 300);
         return () => clearTimeout(timer);
      }
   },[showSidebar])

   const value = {
      isDarkTheme,
      showSidebar,
      getImage,
      onThemeDark: handleThemeDark,
      onCloseSidebar: handleCloseSidebar,
      onOpenSidebar: handleOpenSidebar,
   }

   return<>
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   </>;
}

export {AppContext, AppProvider}