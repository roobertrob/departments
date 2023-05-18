import useAppData from "data/hook/useAppData";
import Cabecalho from "../../../components/Header/Cabecalho";
import Conteudo from "../../../components/Content/Conteudo";
import MenuLateral from "../../../components/Sidebar/MenuLateral";
import { ReactNode } from "react";
import PrivateRoute from "../PrivateRoute";

interface LayoutProps {
   titulo: string;
   subtitulo: string;
   children?: ReactNode;
   classe?: string;
   searchInput?: ReactNode;
}
const LoggedContainer = (props: LayoutProps) => {
   const { tema, classe } = useAppData();
   return (
      <PrivateRoute>
         <div className={`${tema} flex h-${classe} w-screen`}>
            <div>
               <MenuLateral />
            </div>

            <div
               className={`flex flex-col w-full p-7 ml-20 bg-gray-300 dark:bg-gray-800`}
            >
               <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
               <Conteudo>{props.children}</Conteudo>
            </div>
         </div>
      </PrivateRoute>
   );
};

export default LoggedContainer;
