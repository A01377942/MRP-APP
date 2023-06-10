import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { Link } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { COLOR_PRINCIPAL } from '@env'

let { height, width } = Dimensions.get('window')

const LoginForm = ({ handleSubmit, handleChange, values, errors, touched }) => {
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                  <FontAwesome name="envelope" size={24} />
                  <TextInput 
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
                  <FontAwesome name="lock" size={24}/>
                  <TextInput 
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    placeholder="Contraseña"
                    secureTextEntry
                />
                {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
            </View>
              <Link to={{ screen: 'PasswordRestart'}} style={styles.forgotPassword}>¿Olvidaste la contraseña?</Link>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>Iniciar sesión</Text>
              </TouchableOpacity>
            
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9A',
    padding: 5,
    marginVertical: '2%'
  },
  input: {
    flex: 1,
    marginLeft: 10
  },
  button: {
    backgroundColor: COLOR_PRINCIPAL,
    borderRadius: 50,
    width: width*0.80,
    alignItems: 'center',
    padding: 10,
  }, 
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  forgotPassword:{
    marginTop: '1%',
    fontSize: 12,
    fontWeight: 'bold',
    color: COLOR_PRINCIPAL,
    marginBottom: '10%'
  },
  error: {
    backgroundColor: '#fa4e4e',
    color: 'white'
  }
})

/**
 * 
 * 
 * ,
      
      
 */