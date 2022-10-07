import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props){
   const [isDarkTheme, setDarkTheme] = useState(false);

   function handleThemeDark(){
      if (isDarkTheme) {         
         document.body.classList.remove("bg-gray-800");
      } else {         
         document.body.classList.add("bg-gray-800");
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