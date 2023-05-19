import { useContext } from 'react'
import ExamenesContext from '../context/ExamenesProvider'

const useExamanes = () =>{
    return useContext(ExamenesContext)
}

export default useExamanes