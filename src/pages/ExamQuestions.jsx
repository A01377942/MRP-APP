import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useExamanes from '../hooks/useExamanes';
import { useNavigation } from '@react-navigation/native';
import { COLOR_PRINCIPAL } from '@env'

const ExamQuestions = () => {
  const route = useRoute();
  const { preguntasExamen } = route.params;
  const preguntas = preguntasExamen;
  const navigation = useNavigation()

  const [respuestas, setRespuestas] = useState([]);

  const handleSeleccionarRespuesta = (preguntaId, opcionId) => {
    const index = respuestas.findIndex(respuesta => respuesta.preguntaId === preguntaId);

    if (index !== -1) {
      const nuevasRespuestas = [...respuestas];
      nuevasRespuestas[index].opcionId = opcionId;
      setRespuestas(nuevasRespuestas);
    } else {
      setRespuestas([...respuestas, { preguntaId, opcionId }]);
    }
  };

  const verificarRespuestas = () => {
    let totalCorrectas = 0;

    respuestas.forEach(respuesta => {
      const pregunta = preguntas.find(pregunta => pregunta._id === respuesta.preguntaId);

      if (pregunta) {
        const opcionSeleccionada = pregunta.opciones.find(opcion => opcion._id === respuesta.opcionId);

        if (opcionSeleccionada && opcionSeleccionada.isCorrect) {
          totalCorrectas++;
        }
      }
    });
    
    navigation.navigate('GradePage',{ totalCorrectas, preguntas})
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {preguntas.map(pregunta => (
        <View key={pregunta._id} style={styles.preguntaContainer}>
          <Text style={styles.preguntaText}>{pregunta.pregunta}</Text>
          {pregunta.opciones.map(opcion => (
            <TouchableOpacity
              key={opcion._id}
              onPress={() => handleSeleccionarRespuesta(pregunta._id, opcion._id)}
              style={[
                styles.opcionContainer,
                respuestas.some(respuesta => respuesta.preguntaId === pregunta._id && respuesta.opcionId === opcion._id) && styles.opcionSeleccionada,
              ]}
            >
              <Text style={styles.opcionText}>{opcion.cuerpo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={verificarRespuestas}>
          <Text style={styles.buttonText}>Verificar respuestas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: 'white'
  },
  preguntaContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  preguntaText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: '2%',
    paddingVertical: 10
  },
  opcionContainer: {
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginVertical: 5,
    width: '80%', // Ajuste para que todos los recuadros tengan el mismo ancho
    alignItems: 'center',
    alignSelf: 'center', // Centrar horizontalmente los recuadros
  },
  opcionSeleccionada: {
    backgroundColor: '#D9D9D9',
  },
  opcionText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center'
  },  
  button: {
    backgroundColor: COLOR_PRINCIPAL,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ExamQuestions;