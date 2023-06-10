import { useState, useEffect, createContext } from 'react'
import { Alert } from 'react-native'
import axios from 'axios'
import { BACKEND_URL } from '@env'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [isSignedIn, setIsSignedIn] = useState(false)
    const [perfil, setPerfil] = useState({})
    const [examenesRealizados, setExamenesRealizados] = useState({})

    const signIn = async ({email, password}) =>{
        if(email == '' && password == ''){
            return Alert.alert('Error al iniciar sesión', 'Comprueba que hayas ingresado los dos datos')
        }
        try{
            const response = await axios.post(`${BACKEND_URL}/api/usuarios/login`, { 
                "email": email,
                "password": password
            });
            setPerfil(response.data)
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
                await axios.post(`${BACKEND_URL}/api/usuarios/`, {
                    "nombre": nombre,
                    "password": password,
                    "email": email
                })
            }catch(error){
                console.log(error)
            }
        }
    }

    const cambiarContrasenia = async ({ email }) =>{
        try{
            await axios.post(`${BACKEND_URL}/api/usuarios/olvide-password`, {
                "email": email
            })
        }catch(error){
            console.log(error)
        }
    }

    const cerrarSesion = () =>{
        setIsSignedIn(false)
    }

    const obtenerPerfil = async () => {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/usuarios/perfil`, {
                "email": perfil.email
            })
            return response.data
        }catch(error){
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
                signIn,
                obtenerPerfil,
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

