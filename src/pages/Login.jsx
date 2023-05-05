import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Formik } from 'formik'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from '@react-navigation/native'

let { height, width } = Dimensions.get('window')



function Login() {
  return (
    <ScrollView contentContainerStyle = { styles.container } keyboardShouldPersistTaps='always'>
      <Image 
        style = { styles.image}
        source={require('../../assets/MRP-Logo.png')}
      />
      <View style={styles.LoginSpace}>
        <Text style={styles.Titulo}>Iniciar Sesión</Text>
          <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={values => console.log(values)}
          >
            {({handleChange, handleBlur, handleSubmit, values}) =>(
              <>
                <View style={styles.inputContainer}>
                  <FontAwesome name="envelope" size={24} color ='#9A9A9A' />
                  <TextInput 
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder = 'Correo Electronico'
                  />
                </View>
                <View style={styles.inputContainer}>
                  <FontAwesome name="lock" size={24} color ='#9A9A9A' />
                  <TextInput 
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder = 'Contraseña'
                    secureTextEntry={true}
                  />
                </View>
              </>
            )}
          </Formik>
          <Link to={{ screen: 'PasswordRestart'}} style={styles.forgotPassword}>¿Olvidaste la contraseña?</Link>
        </View>
        <View style={styles.LoginButton}>
          <TouchableOpacity style={styles.button}>
          <Link to={{ screen: 'Main'}} style={styles.buttonText}>Login</Link>
          </TouchableOpacity>
          <View style={styles.centerText}>
            <Text style={styles.text}>¿No tienes una cuenta? </Text>
            <Link to={{ screen: 'Register'}} style={styles.link}>Crea una aquí</Link>
          </View>
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
    height: '40%',
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  text:{
    fontSize: 12,
    fontWeight: 'bold'
  },
  link:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0038FF',
    textDecorationLine: 'underline'
  },
  forgotPassword:{
    marginTop: '1%',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0038FF'
  },
  button: {
    backgroundColor: '#0038FF',
    borderRadius: 50,
    width: width*0.80,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  centerText: {
    flexDirection: 'row',
    width: '90%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    height: '10%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9A',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center'
  }
})

export default Login

