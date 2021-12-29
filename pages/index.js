import {useEffect, useState} from "react"
import axios from "axios"

export default function Home () {
  const [clientes, setClientes] = useState([])
  useEffect(
    () => {
      carcli()
    },
    []
  )

  async function carcli (){ 
    const response = await axios.get ("https://api-estudo.srvbackend.vps-kinghost.net/clientes")
    setClientes(response.data)
  }

  return(
    <div className="border border-red-500 h-screen flex flex-col justify-center items-center">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF/CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map((cliente, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cliente.razaoSocial}</td>
                  <td>{cliente.cpfCnpj}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}