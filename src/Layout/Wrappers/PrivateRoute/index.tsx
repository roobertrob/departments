import Router from "next/router";
import useAuth from "data/hook/useAuth";

const PrivateRoute = (props) => {
   const { usuario, carregando } = useAuth();
   function renderizarConteudo() {
      return <>{props.children}</>;
   }
   function renderizarLoading() {
      return (
         <div className={`flex justify-center items-center h-screen`}>
            <div className='border-r-transparent spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-primary-500' />
         </div>
      );
   }

   if (!carregando && usuario?.email) {
      return renderizarConteudo();
   } else if (carregando) {
      return renderizarLoading();
   } else {
      Router.push("/auth");
      return null;
   }
};

export default PrivateRoute;
