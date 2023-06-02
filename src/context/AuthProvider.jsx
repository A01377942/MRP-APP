import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    const signIn = async ({email, password}) =>{
        if(email == '' && password == ''){
            return Alert.alert('Error al iniciar sesión', 'Comprueba que hayas ingresado los dos datos')
        }
        try{
            const response = await axios.post('http://192.168.100.28:4000/api/usuarios/login', {
                "email": email,
                "password": password
            });
            console.log(response.data)
            setIsSignedIn(true)
        } catch(err){
            console.log(err)
            Alert.alert('Error al inicial la sesión', 'Ha ocurrido un error al iniciar la sesión')
        }
    }

    const registrarUsuario = async ({nombre, password, passwordConfirm, email}) =>{
        
        if(passwordConfirm !== password){
            Alert.alert('Error en contraseñas', 'Las contraseñas son diferentes')
        }else{
            try{
                const response = await axios.post('http://192.168.100.28:4000/api/usuarios/', {
                    "nombre": nombre,
                    "password": password,
                    "email": email
                })
                console.log(response.data)
               
            }catch(error){
                console.log(error)
            }
        }
    }

    const cambiarContrasenia = async ({ email }) =>{
        try{
            const response = await axios.post('http://192.168.100.28:4000/api/usuarios/olvide-password', {
                "email": email
            })
            console.log(response.data.msg)
            Alert.alert('Pasos Enviados', 'Ve a tu correo para continuar con el reestablecimiento de password')
        }catch(error){
            console.log(error)
        }
    }

    const cerrarSesion = () =>{
        setIsSignedIn(false)
    }

    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
                signIn,
                registrarUsuario,
                cambiarContrasenia,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { 
    AuthProvider
}

export default AuthContext;

