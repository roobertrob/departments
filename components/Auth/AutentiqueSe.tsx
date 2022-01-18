import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import useAuth from '../../data/hook/useAuth';
import loading from '../../public/loading.gif'

export default function AutentiqueSe(props) {
    const { usuario, carregando } = useAuth()
    function renderizarConteudo() {
        return (
            <>
                    {props.children}
            </>
        )
    }
    function renderizarLoading() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loading}>

                </Image>

            </div>
        )
    }


    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarLoading()
    } else {
        Router.push('/auth')
        return null
    }
}