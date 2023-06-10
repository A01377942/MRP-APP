import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import useAuth from '../hooks/useAuth'
import useExamanes from '../hooks/useExamanes'
import React, {useEffect, useState} from 'react'
import { useGestureHandlerRef } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const ExamHistori = () => {
    const {obtenerPerfil} = useAuth()
    const {obtenerExamen} = useExamanes()
    const [examenes, setExamenes] = useState([])

    useEffect(() =>{
        const obtenerExamenes = async() =>{
            const examenesObtenidos = await obtenerPerfil()
            setExamenes(examenesObtenidos.examenesRealizados)
        }
        obtenerExamenes()
        console.log(`Examenes: ${examenes}`)
    },[])

    const obtenerDatos = (id) =>{
        obtenerExamen(id)
    }

  return (

    <ScrollView horizontal>
        {examenes.map((examen, index) =>{
            {const datosDeExamen = obtenerDatos(examen._id)
                console.log(datosDeExamen)
            }
        })}
    </ScrollView>
  )
}

export default ExamHistori

const styles = StyleSheet.create({})