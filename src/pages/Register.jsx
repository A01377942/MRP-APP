import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Formik } from 'formik'
import { FontAwesome } from '@expo/vector-icons'

function Register() {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='always'>
      <Text style={styles.Titulo}>Crea tu Cuenta</Text>
      
      <Formik
            initialValues={{ email: '', password: '', userName: '', passwordConfirm: ''}}
            onSubmit={values => console.log(values)}
          >
            {({handleChange, handleBlur, handleSubmit, values}) =>(
              <View style = {styles.form}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={24} color ='#9A9A9A' />
                    <TextInput 
                      style={styles.input}
                      onChangeText={handleChange('userName')}
                      onBlur={handleBlur('userName')}
                      value={values.userName}
                      placeholder = 'Nombre de Usuario'
                    />
                </View>
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
                <View style={styles.inputContainer}>
                  <FontAwesome name="lock" size={24} color ='#9A9A9A' />
                  <TextInput 
                    style={styles.input}
                    onChangeText={handleChange('passwordConfirm')}
                    onBlur={handleBlur('passwordConfirm')}
                    value={values.passwordConfirm}
                    placeholder = 'Confirmar contraseña'
                    secureTextEntry={true}
                  />
                </View>
              </View>
            )}
      </Formik>

      <View style={styles.LoginButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.centerText}>
            <Text style={styles.text}>¿Ya tienes una cuenta? </Text>
            <Text style={styles.link}>Inicia sesión aquí</Text>
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
    justifyContent: 'center'
  },
  Titulo: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: 'bold'
  },
  LoginButton:{
    width: '80%'  
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
  centerText: {
    flexDirection: 'row',
    width: '90%',
    alignContent: 'center',
    justifyContent: 'center'
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
