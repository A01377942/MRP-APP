import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Formik } from 'formik'
import { Alert } from 'react-native'
import { Link } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import RegisterForm from '../components/RegisterForm'
import { useNavigation } from '@react-navigation/native'
import { COLOR_PRINCIPAL } from '@env'



function Register() {
  const { registrarUsuario } = useAuth()
  const navigaton = useNavigation()

  const handleSubmit = (values) => {
    registrarUsuario(values);
    Alert.alert(
      'Ya estas registrado', 
      'Ingresa a tu correo para confirmar tu cuenta y poder ingresar',
      [
          {
              text: 'OK',
              onPress: () => {
                  navigaton.navigate('Login')
              }
          }
      ]
      )
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='always'>
      <Text style={styles.Titulo}>Crea tu Cuenta</Text>
      
      <Formik
            initialValues={{ email: '', password: '', nombre: '', passwordConfirm: ''}}
            onSubmit={handleSubmit}
          >
            {({handleChange, handleSubmit, values, errors, touched}) =>(
              <RegisterForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
              />
            )}
      </Formik>

      <View>
          <View style={styles.centerText}>
            <Text style={styles.text}>¿Ya tienes una cuenta? </Text>
            <Link to={{ screen: 'Login'}} style={styles.link}>Inicia sesión aquí</Link>
          </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  Titulo: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: COLOR_PRINCIPAL,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text:{
    fontSize: 12,
    fontWeight: 'bold'
  },
  centerText:{
    flexDirection: 'row'
  },
  link:{
    fontSize: 12,
    fontWeight: 'bold',
    color: COLOR_PRINCIPAL,
    textDecorationLine: 'underline'
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

export default Register
