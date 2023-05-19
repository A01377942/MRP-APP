import { useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/clienteAxios'
import axios from 'axios'

const ExamenesContext = createContext()

function ExamenesProvider({children}) {
  const {examenes, setExamenes} = useState([])
  
  const obtenerExamenes = async () =>{
    try {
      const response = await axios.post('http://192.168.100.28:4000/api/examenes')
      setExamenes(response.data.msg)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ExamenesContext.Provider
      value={{
        examenes, 
        setExamenes,
        obtenerExamenes
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
