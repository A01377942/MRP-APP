import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import useExamanes from '../hooks/useExamanes';
import { Alert } from 'react-native';
import { COLOR_PRINCIPAL } from '@env'

const ExamDetail = () => {
    const route = useRoute();
    const { examen } = route.params;
    const { obtenerExamen } = useExamanes()
    const { titulo, tipoDeExamen, preguntas, imagen, numeroDeIntentos, descripcion} = examen
    const navigation = useNavigation()
    const [preguntasExamen, setPreguntasExamen] = useState([]) 
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState('')

    const obtenerPreguntas = async() => {
        try {
          const preguntasObtenidas = await obtenerExamen(examen._id);
          setPreguntasExamen(preguntasObtenidas);
          navigation.navigate('ExamQuestions', { preguntasExamen });
        } catch (error) {
          console.log(error);
        }
      };

    const handleIniciarExamen = async () => {
        if (examen.password === null) {
          await obtenerPreguntas();
        } else {
          setIsVisible(true);
        }
      };
      
      const handleIniciarExamenConPasword = async (password) => {
        if (password !== examen.password) {
          Alert.alert("Error en la contraseña", "Comprueba tu contraseña e intenta nuevamente");
        } else {
          await obtenerPreguntas();
        }
      };
      

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

  return (
    <View style={styles.global}>
        {isVisible && (
                <View style={styles.alertContainer}>
                    <Text style={styles.alertTextTitle}>Ingresa la contraseña</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Contraseña" 
                    secureTextEntry 
                    value={password}
                    onChangeText={handlePasswordChange} 
                    />
                    <View style={styles.buttonContainer}>
                        <Button  
                            title="Cancelar"
                            onPress={() => setIsVisible(false)}
                            style={styles.cancelButton}
                        />
                        <Button  
                            title="Aceptar"
                            onPress={() => handleIniciarExamenConPasword(password)}
                            style={styles.confirmButton}
                        />
                    </View>
                </View>
        )}

        <View style={styles.container}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.tag}>#{tipoDeExamen}</Text>
        <Text style={styles.questionCount}>Número de preguntas: {preguntas.length}</Text>
        <Text style={styles.info}>Intentos Disponibles: {numeroDeIntentos}</Text>
        <Image source={{ uri: imagen }} style={styles.image} />
        <Text style={styles.description}>Descripción: {descripcion}</Text>
        <TouchableOpacity style={styles.button} key={1} onPress={() => handleIniciarExamen()}>
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
        color: COLOR_PRINCIPAL,
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
        backgroundColor: COLOR_PRINCIPAL,
        borderRadius: 50,
        width:'80%',
        alignItems: 'center',
        padding: 10,
    },
    alertContainer: {
        width: '90%',
        height: 'auto',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '30%',
        left: '5%',
        right: '5%',
        zIndex: 9999,
        padding: '10%'
      },
      alertTextTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      input: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        width: 200,
      },
      buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      cancelButton: {
        backgroundColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10
    },
    confirmButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10
      },
});