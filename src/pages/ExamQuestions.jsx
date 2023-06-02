import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useExamanes from '../hooks/useExamanes'

const ExamQuestions = () => {
    const { obtenerExamen } = useExamanes()
    const route = useRoute();
    const { examen } = route.params;
    const [preguntas, setPreguntas] = useState([])

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const preguntasObtenidas = await obtenerExamen(examen._id)
        setPreguntas(preguntasObtenidas)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPreguntas()
  }, [])

  return (
    <View>
      {preguntas.map((pregunta, index) => (
        <View key={pregunta._id}>
          <Text>Pregunta {index + 1}: {pregunta.pregunta}</Text>
            <TouchableOpacity>
                <Text style={styles.text}>{pregunta.opciones}</Text>
            </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ExamQuestions;