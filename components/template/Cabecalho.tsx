import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";
import BotaoTema from "./BotaoTema";
import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string,
    subtitulo: string,

}
export default function Cabecalho(props: CabecalhoProps) {
    const { usuario } = useAuth();
    const { tema, alternarTema } = useAppData()
    return (
        <div className={`flex items-center`}>
            <Titulo
                titulo={props.titulo}
                subtitulo={props.subtitulo}
            />
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoTema tema={tema} alternarTema={alternarTema} />
                <img src={usuario.imagemURL} className={`h-10 w-10 rounded-full ml-3`}/>
            </div>
        </div>
    )
}