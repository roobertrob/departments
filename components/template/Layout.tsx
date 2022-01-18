import useAppData from "../../data/hook/useAppData";
import AutentiqueSe from "../Auth/AutentiqueSe";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string,
    subtitulo: string,
    children?: any,
}
export default function Layout(props: LayoutProps) {
    const dados = useAppData();
    return (
        <AutentiqueSe>
            <div className={`${dados.tema} flex h-full w-screen`}>

                <div>
                    <MenuLateral />
                </div>

                <div className={`flex flex-col w-full p-7 ml-20 bg-gray-300 dark:bg-gray-800`}>
                    <Cabecalho
                        titulo={props.titulo}
                        subtitulo={props.subtitulo}
                    />
                    <Conteudo>{props.children}</Conteudo>
                </div>
            </div>
        </AutentiqueSe>
    )
}