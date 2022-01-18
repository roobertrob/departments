import { useState } from "react";
import Input from "../components/Auth/Input";
import { WarningIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Auth() {
    
    const {cadastrar, login, loginGoogle} = useAuth()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    function exibirErro(msg, tempo = 5000){
        setErro(msg)
        setTimeout(()=>setErro(null),tempo)
    }

    async function submit() {
        try{
            if (modo === 'login') {
                 await login(email, senha)
                
            } else {
                 await cadastrar(email, senha)
            }

        } catch(e){
            exibirErro(e?.message ?? 'Erro desconhecido')
        }
        
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2">
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da tela de autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="md:w-1/2 w-full m-10">
                <h1 className={`
                 text-xl font-bold mb-5 
                 `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se'}
                </h1>
                {erro ?(<div className={`flex items-center bg-red-400 text-white py-3 px-5 border border-red-800 rounded-lg`}>
                    {WarningIcon(6)}
                    <span className="ml-4">{erro}</span>
                </div>) : false}

                <Input 
                label="E-mail" 
                valor={email} 
                valorAlterado={setEmail} 
                obrigatorio />

                <Input 
                label="Senha" 
                tipo="password" 
                valor={senha} 
                valorAlterado={setSenha} 
                obrigatorio />

                <Input 
                label="Senha" 
                tipo="password" 
                valor={senha} 
                valorAlterado={setSenha} 
                obrigatorio 
                naoRenderiza={true}/>

                <button onClick={submit} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />
                
                <button onClick={loginGoogle} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 `}>
                    {modo === 'login' ? 'Entrar com o Google' : 'Cadastrar'}
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 cursor-pointer font-semibold`
                        } > Crie sua conta</a>
                    </p>

                ) : (
                    <p className="mt-8">
                        Já possui cadastro?
                        <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 cursor-pointer font-semibold
                        `} > Faça o login</a>
                    </p>

                )}

            </div>

        </div>

    )
}