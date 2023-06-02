import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Exam = ({ examen }) => {
  const { titulo, tipoDeExamen, preguntas, imagen } = examen

  return (
    <View style={styles.examContainer}>
      <ImageBackground
        source={{uri: imagen}}
        style={styles.imageBackground}
        resizeMode='cover'
      >
        <View style={styles.overlay}>
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>{tipoDeExamen}</Text>
          </View>
          <Text style={styles.titleText}>{titulo}</Text>
          <Text style={styles.questionCountText}>Preguntas: {preguntas.length}</Text>
        </View>
      </ImageBackground>
    </View>

  )
}

export default Exam

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 8
  },
  examContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    margin: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Color de fondo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeContainer: {
    backgroundColor: '#3039FF',
    borderRadius: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  typeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    marginTop: 8,
    marginBottom: 24 
  },
  questionCountText: {
    color: 'white',
    fontSize: 14,
  },
})