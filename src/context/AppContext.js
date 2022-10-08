import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props){
   const [isDarkTheme, setDarkTheme] = useState(false);

   function handleThemeDark(){
      if (isDarkTheme) {         
         document.body.classList.remove("dark-mode");
      } else {         
         document.body.classList.add("dark-mode");
      }
      setDarkTheme(!isDarkTheme);
   }

   const value = {
      isDarkTheme: isDarkTheme,
      onHandleThemeDark: handleThemeDark
   }

   return<>
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   </>;
}

export {AppContext, AppProvider}