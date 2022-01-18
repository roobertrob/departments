import { route } from 'next/dist/server/router';
import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Usuario from '../../model/Usuario';
import Cookies from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    login?:(email: string, senha: string) => Promise<void>
    cadastrar?:(email: string, senha: string) => Promise<void>
    logout?: () => Promise<void>
}
const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemURL: usuarioFirebase.photoURL

    }

}
function GerenciaCookies(logado: boolean) {

    if (logado) {
        Cookies.set('auth', logado, {
            expires: 7 //qtd em dias
        })
    } else {
        Cookies.remove('auth')
    }

}

export function AuthProvider(props) {
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)

    async function configurarSessão(usuarioFirebase) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            GerenciaCookies(true)
            setCarregando(false)
            return usuario.email

        } else {
            setUsuario(null)
            GerenciaCookies(false)
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            configurarSessão(resp.user)
            Router.push("/")
        }
        finally {
            setCarregando(false)
        }
    }
    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessão(null)
        }
        finally {
            setCarregando(false)
        }

    }
    async function login(email, senha) {
        try {
                setCarregando(true)
                const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
                

                configurarSessão(resp.user)
                Router.push("/")
            }
            finally {
                setCarregando(false)
            }
        }
        async function cadastrar(email, senha) {
            try {
                    setCarregando(true)
                    const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)
                    configurarSessão(resp.user)
                    Router.push("/")
                }
                finally {
                    setCarregando(false)
                }
            }
    useEffect(() => {
        if (Cookies.get('auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessão)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            login,
            cadastrar, 
            logout,
        }}>
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthContext