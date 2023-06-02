import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import useExamanes from '../hooks/useExamanes';

const ExamDetail = () => {
    const route = useRoute();
    const { examen } = route.params;
    const { obtenerExamen } = useExamanes()
    const { titulo, tipoDeExamen, preguntas, imagen, numeroDeIntentos, descripcion} = examen
    const navigation = useNavigation()
    const [preguntasExamen, setPreguntasExamen] = useState([]) 

    useEffect(() =>{
        const obtenerPreguntas = async() => {
            try {
              const preguntasObtenidas = await obtenerExamen(examen._id)
              setPreguntasExamen(preguntasObtenidas)
            } catch (error) {
              console.log(error)
            }
          }
          obtenerPreguntas()
          console.log(examen)
    }, [])

    const handleIniciarExamen = (preguntasExamen) =>{
    }

  return (
    <View style={styles.global}>
        <View style={styles.container}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.tag}>#{tipoDeExamen}</Text>
        <Text style={styles.questionCount}>Número de preguntas: {preguntas.length}</Text>
        <Text style={styles.info}>Intentos Disponibles: {numeroDeIntentos}</Text>
        <Image source={{ uri: imagen }} style={styles.image} />
        <Text style={styles.description}>Descripción: {descripcion}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIniciarExamen(preguntasExamen)}>
            <Text style={styles.text}>Iniciar Examen</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default ExamDetail;

const styles = StyleSheet.create({
    global: {
        backgroundColor: 'white',
        with: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    tag: {
        backgroundColor: '#FF6230',
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        padding: '1%',
        borderRadius: 4,
    },
    typeText:{
        backgroundColor: '#3039FF',
        borderRadius: 4,
        alignSelf: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: 'white',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    questionCount: {
        fontSize: 16,
        marginBottom: 8,
    },
    info: {
        color: '#0038FF',
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 16,
    },
    image: {
        width: '80%',
        height: '50%',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: '#0038FF',
        borderRadius: 50,
        width:'80%',
        alignItems: 'center',
        padding: 10,
    }
});