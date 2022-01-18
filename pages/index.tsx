import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import InputSearch from '../components/template/InputSearch'
import Layout from '../components/template/Layout'



export default function Home() {
  const [todosDeps, setTodosDeps] = useState([])
    async function getDepartament() {
        const URL = 'http://localhost:3000/api/todos'
        const resp = await fetch(URL)
        const json = await resp.json();
        setTodosDeps(json)
    }

    useEffect(() => {
        getDepartament()
    }, [])

  return (
    <div>
       <Layout titulo="Tabela de departamentos" subtitulo="Veja aqui quais são:" >
       <div className={`sm:w-1/4 w-full`}>
       <InputSearch placeholder="Pesquise aqui"/>
       </div>
         <table className={`sm:w-1/4 min-w-min flex flex-col w-full border rounded-lg`}>
           <thead className={``}>
             <tr>
               <th className={`p-3 items-center justify-center`}>ID</th>
               <th className={`p-3`}>NOME DO DEPARTAMENTO</th>
             </tr>
           </thead>
           <tbody>
             {todosDeps.map(departamento=>{
               return(
                 <tr key={departamento.id}>
                   <td className={`flex items-center justify-center mr-1 p-3 border`}>{departamento.id}</td>
                   <td>{departamento.nome}</td>
                 </tr>
               )
             })}
           </tbody>
         </table>
       </Layout>

    </div>
  )
}