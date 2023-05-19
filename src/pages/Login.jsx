import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Formik } from 'formik'
import { Link } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import LoginForm from '../components/LoginForm'

//Validation Schema
import loginValidationSchema from '../validationSchema/login.js'

let { height, width } = Dimensions.get('window')

function Login() {
  const { signIn } = useAuth()

  const handleSubmit = (values) => {
    signIn(values);
  };

  return (
    <ScrollView contentContainerStyle = { styles.container } keyboardShouldPersistTaps='always'>
      <Image 
        style = { styles.image}
        source={require('../../assets/MRP-Logo.png')}
      />
      <View style={styles.LoginSpace}>
        <Text style={styles.Titulo}>Iniciar Sesión</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
          <LoginForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
            />
          )}
        </Formik>
          
        </View>

          <View style={styles.centerText}>
            <Text style={styles.text}>¿No tienes una cuenta? </Text>
            <Link to={{ screen: 'Register'}} style={styles.link}>Crea una aquí</Link>
          </View>
        
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
  image:{
    width: '80%',
    marginBottom: 15
  },
  LoginSpace:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginButton:{
    height: height*0.2
  },
  Titulo: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold'
  },
  link:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0038FF',
    textDecorationLine: 'underline'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centerText: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width: '90%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 12,
    fontWeight: 'bold'
  },
})

export default Login

