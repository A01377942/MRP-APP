import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native';
import { COLOR_PRINCIPAL } from '@env'

const GratePage = () => {
  const [redirected, setRedirected] = useState(false);
  const route = useRoute();
  const { totalCorrectas, preguntas} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!redirected) {
        e.preventDefault();
        setRedirected(true);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'navigation' }],
          })
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigation, redirected]);

  const calcularPorcentaje = () => {
    const porcentaje =  (totalCorrectas / preguntas.length) * 100;
    return Math.floor(porcentaje)
  };

  const getCircleColor = (porcentaje) => {
    if (porcentaje >= 80) {
      return 'green';
    } else if (porcentaje >= 60 && porcentaje < 80) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const porcentaje = calcularPorcentaje();
  const circleColor = getCircleColor(porcentaje);

  const handleIrAlInicio = () =>{
    if (!redirected) {
      setRedirected(true);
      navigation.navigate('navigation');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu porcentaje de respuestas correctas es: </Text>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <Text style={styles.circleText}>{porcentaje}%</Text>
      </View>
      <Text style={styles.text}>Ve para atras para regresar a la pantalla de inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text:{
    fontSize: 10,
  },
  button: {
      marginTop: 20,
      backgroundColor: COLOR_PRINCIPAL,
      borderRadius: 50,
      width:'80%',
      alignItems: 'center',
      padding: 10,
  }
});

export default GratePage;