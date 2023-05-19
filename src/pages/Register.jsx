import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Formik } from 'formik'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import RegisterForm from '../components/RegisterForm'



function Register() {
  const { registrarUsuario } = useAuth()

  const handleSubmit = (values) => {
    registrarUsuario(values);
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
    backgroundColor: '#0038FF',
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
    color: '#0038FF',
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
