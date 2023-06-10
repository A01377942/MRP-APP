import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Formik } from 'formik'
import { FontAwesome } from '@expo/vector-icons'
import useAuth from '../hooks/useAuth'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLOR_PRINCIPAL } from '@env'

function PasswordRestart() {
  const { cambiarContrasenia } = useAuth()
  const navigation = useNavigation()

  const handleSubmit = (values) => {
    cambiarContrasenia(values);
    Alert.alert(
      'Pasos Enviados', 
      'Ve a tu correo para continuar con el reestablecimiento de password',
      [
          {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login')
              }
          }
      ]
      )
  };

  return (
    <ScrollView contentContainerStyle = { styles.container } keyboardShouldPersistTaps='always'>
        <Text style={styles.Titulo}>Reestablecer contraseña</Text>
        <Text style={styles.feedback}>Introduce el correo electronico asociado a tu cuenta MRP y te enviaremos un correo con instrucciones para reestablecer tu contraseña</Text>
        
        <Formik
            initialValues={{ email: ''}}
            onSubmit={values => console.log(values)}
          >
            {({handleChange, handleBlur, handleSubmit, values}) =>(
              <View style = {styles.form}>
                <View style={styles.inputContainer}>
                  <FontAwesome name="envelope" size={24} color ='#9A9A9A' />
                  <TextInput 
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder = 'Correo Electrónico'
                  />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
              </View>
            )}
      </Formik>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  Titulo: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: 'bold'
  },
  feedback:{
    fontFamily: 'System',
    fontSize: 16,
    marginVertical: '5%',
    width: '80%'
  },
  button: {
    backgroundColor: COLOR_PRINCIPAL,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginVertical: '5%',
    paddingHorizontal: '30%',
    paddingVertical: '2.5%'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9A',
    padding: 5
  },
  input: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
  },
  form:{
    marginBottom: '5%',
    marginTop: '5%'
  }
})

export default PasswordRestart
