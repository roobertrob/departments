import { useEffect, useState } from 'react'
import Layout from '../components/template/Layout'
export default function Home() {

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [todosDeps, setTodosDeps] = useState([]);
  const [classe, setClasse] = useState<string>('');

  async function getDepartament() {
    const URL = 'https://sol-h8ns7cl76-roobertrot.vercel.app/api/todos'
    const resp = await fetch(URL)
    const json = await resp.json();
    setTodosDeps(json)
  }

  useEffect(() => {
    getDepartament()
  }, [])

    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
        const filteredData = todosDeps.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
      }
      else {
        setFilteredResults(todosDeps)
      }
    }

    useEffect(() => {
      atualizaLayout(searchInput)
    },[searchInput])

   function atualizaLayout(searchInput){
      if(searchInput.length>2){
        setClasse("screen")
      } else{
        setClasse("full")
      }
    }
  
  return (
    <Layout titulo="Tabela de departamentos" subtitulo="Veja aqui quais são:" classe={classe}>
      <div className={`sm:w-1/4 w-full`}>
        <div className="flex flex-col mb-2">
          <input className={`px-4 py-3 rounded-lg bg-gray-200 text-gray-900 mt-2 border focus:border-blue-400 focus:outline-none focus:bg-white`}
            placeholder="Pesquise aqui"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </div>
      <table className={`sm:w-1/4 min-w-min flex flex-col w-full border rounded-lg`}>
        <thead className={``}>
          <tr>
            <th className={`p-3 items-center justify-center`}>ID</th>
            <th className={`p-3`}>NOME DO DEPARTAMENTO</th>
          </tr>
        </thead>
        <tbody>
          {searchInput.length > 2 ? (
            filteredResults.map((departamentoFiltrado) => {
              return (
                <tr key={departamentoFiltrado.id}>
                  <td className={`flex items-center justify-center mr-1 p-3 border `}>{departamentoFiltrado.id}</td>
                  <td>{departamentoFiltrado.nome}</td>
                </tr>
              )
            })
          ) : (
            todosDeps.map(departamento => {
              return (
                <tr key={departamento.id}>
                  <td className={`flex items-center justify-center mr-1 p-3 border rounded-lg`}>{departamento.id}</td>
                  <td>{departamento.nome}</td>
                </tr>
              )
            }
            )
          )
          }
        </tbody>
      </table>
    </Layout>

  )
}

