import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { Link } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { Alert } from 'react-native'
import React from 'react'
import { COLOR_PRINCIPAL } from '@env'

const RegisterForm = ({ handleSubmit, handleChange, values, errors, touched }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
            <FontAwesome name="user" size={24} color ='#9A9A9A' />
            <TextInput 
                style={styles.input}
                onChangeText={handleChange('nombre')}
                value={values.nombre}
                placeholder = 'Nombre de Usuario'
            />
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome name="user" size={24} color ='#9A9A9A' />
            <TextInput 
                style={styles.input}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder = 'Correo Electronico'
                keyboardType="email-address"
                autoCapitalize="none"
            />
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={24} color ='#9A9A9A' />
            <TextInput 
                style={styles.input}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Contraseña"
                secureTextEntry
            />
        </View>
        <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={24} color ='#9A9A9A' />
            <TextInput 
                style={styles.input}
                onChangeText={handleChange('passwordConfirm')}
                value={values.passwordConfirm}
                placeholder="Confirmar Contraseña"
                secureTextEntry
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Registrarse</Text>
        </TouchableOpacity>

    </View>
  )
}

export default RegisterForm

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
        width: '100%',
        alignItems: 'center',
        marginVertical: '5%',
        paddingHorizontal: '30%',
        paddingVertical: '2.5%'
    }, 
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})