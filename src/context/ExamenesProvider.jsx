import { useState, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'
import axios from 'axios'
import { BACKEND_URL } from '@env'

const ExamenesContext = createContext()

function ExamenesProvider({ children }) {
  const [examenes, setExamenes] = useState([])

  const obtenerExamenes = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/examenes`)
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
      const response = await axios.post(`${BACKEND_URL}/api/examenes/buscar`, {
        "texto": termino
      })
      return response.data.msg
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerExamen = async (id) =>{
    try {
      const response = await axios.get(`${BACKEND_URL}/api/examenes/${id}`)
      console.log('Preguntas Obtenidas')
      return response.data.examen.preguntas
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