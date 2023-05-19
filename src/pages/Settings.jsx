import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import useAuth from '../hooks/useAuth'

const Settings = () => {
  const { cerrarSesion } = useAuth()
  return (
    <View style={styles.principal}>
      <Text style={styles.TituloPrincipal}>MRP Cap acitaciones</Text>
      <View style={styles.container}>
              <TouchableOpacity 
                style={[styles.closeSession, styles.buttonContent]}
                onPress={cerrarSesion}
              >
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
                <FontAwesome name="window-close" size={40} color={'red'} />
              </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  closeSession:{
    position: 'absolute',
  }
})

/*
<View style={styles.principal}>
      <Text style={styles.TituloPrincipal}>MRP Capacitaciones</Text>
      <View style={styles.container}>
          <View style={styles.userData}>
            <FontAwesome name="user" size={124} color={'black'} />
            <Text style={styles.nombre}>Rafael Romero</Text>
          </View>
          <View style={styles.examenes}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome style={styles.icon} name="th-list" size={24} color={'gold'} />
              <Text style={styles.examData}>Examenes Contestados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome style={styles.icon} name="star" size={24} color={'gold'} />
              <Text style={styles.examData}>Examenes Premium</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastButtons}>
            <TouchableOpacity style={styles.buttonContent}>
                <Text style={styles.buttonText}>Explorar cursos MRP</Text>
                <FontAwesome name="search" size={40} color={'blue'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContent}>
                <Text style={styles.buttonText}>Contacto</Text>
                <FontAwesome name="question-circle" size={40} color={'gold'} />
              </TouchableOpacity>
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
*/