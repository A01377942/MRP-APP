import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Formik } from 'formik'
import { FontAwesome } from '@expo/vector-icons'

function PasswordRestart() {
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
              </View>
            )}
      </Formik>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
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
    backgroundColor: '#0038FF',
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    padding: 10,
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
