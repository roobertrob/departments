import { createContext, useEffect, useState } from "react";

interface AppContextProps {
   tema?: string;
   alternarTema?: () => void;
}
const AppContext = createContext<AppContextProps>({}); //context - onde os dados estão

export const AppProvider = (props) => {
   const [tema, setTema] = useState("dark");

   function alternarTema() {
      const novoTema = tema === "" ? "dark" : "";
      setTema(novoTema);
      localStorage.setItem("tema", novoTema);
   }
   useEffect(() => {
      const temaSalvo = localStorage.getItem("tema");
      setTema(temaSalvo);
   }, []);

   return (
      <AppContext.Provider
         value={{
            tema,
            alternarTema,
         }}
      >
         {props.children}
      </AppContext.Provider> //vou envolver alguma tag com o provider e será exibido por esse props.children
   );
};

export default AppContext;
export const AppConsumer = AppContext.Consumer;
