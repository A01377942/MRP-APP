import { useState, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'
import axios from 'axios'

const ExamenesContext = createContext()

function ExamenesProvider({ children }) {
  const [examenes, setExamenes] = useState([])

  const obtenerExamenes = async () => {
    try {
      const response = await axios.get('http://192.168.100.28:4000/api/examenes')
      return response.data.msg
    } catch (error) {
      console.log(error)
    }
  }

  const buscarExamen = async (termino) => {
    if(termino === ''){
      return []
    }
    try {
      const response = await axios.post('http://192.168.100.28:4000/api/examenes/buscar', {
        "texto": termino
      })
      console.log(response.data)
      return response.data.msg
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerExamen = async (id, password = null) =>{
    try {
      const response = await axios.post(`http://192.168.100.28:4000/api/examenes/${id}`, {
        "password": password
      })
      console.log("Reponse from peticion: ", response.data.examen)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ExamenesContext.Provider
      value={{
        examenes,
        setExamenes,
        obtenerExamenes,
        obtenerExamen,
        buscarExamen
      }}
    >
      {children}
    </ExamenesContext.Provider>
  )
}

export {
  ExamenesProvider
}

export default ExamenesContext