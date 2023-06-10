import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native';
import { NOMBRE_MARCA } from '@env';


const Settings = () => {
  const { cerrarSesion} = useAuth()
  const navicator = useNavigation()

  const handleMostrarExamens = async () => {
    navicator.navigate("ExamHistory")
  }
  return (
    <View style={styles.principal}>
      <Text style={styles.TituloPrincipal}>{NOMBRE_MARCA}</Text>
      <View style={styles.container}>
        <View styles={styles.buttonContainer}>
                <TouchableOpacity 
                  style={[styles.closeSession, styles.buttonContent]}
                  onPress={cerrarSesion}
                >
                  <Text style={styles.buttonText}>Cerrar Sesión</Text>
                  <FontAwesome name="window-close" size={40} color={'red'} />
                </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  principal:{
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'white'
  },
  TituloPrincipal:{
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%'
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userData:{
    marginBottom: '5%'
  },
  nombre:{
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button:{
    width: '40%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  examData:{
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 10
  },
  examenes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  lastButtons: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: '2%'
  },
  lastButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: '10%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeSession:{
    position: 'absolute',
  },
  historialButton: {
  width: '40%',
  borderRadius: 10,
  backgroundColor: 'orange',
  paddingVertical: 10,
  paddingHorizontal: 15,
  marginHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  }
})
