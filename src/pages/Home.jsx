import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useExamanes from '../hooks/useExamanes'
import { ScrollView } from 'react-native-gesture-handler'
import Exam from '../components/Exam'

const Home = () => {
  const { obtenerExamenes } = useExamanes()
  const [examenes, setExamenes] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const fetchExamenes = async () => {
      try {
        const examenesObtenidos = await obtenerExamenes()
        setExamenes(examenesObtenidos)
      } catch (error) {
        console.log(error)
      }
    }
    fetchExamenes()
  }, [])

  const handleExamPress = (examen) => {
    navigation.navigate('ExamDetail', { examen });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TituloPrincipal}>MRP Capacitaciones</Text>
      <View>
        <Text style={styles.bestExam}>Examenes agregados recientemente</Text>
        <ScrollView vertical>
          {examenes.map((examen, index) => (
            <TouchableOpacity key={examen._id} onPress={() => handleExamPress(examen)}>
              <Exam examen={examen} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  TituloPrincipal: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  bestExam: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '5%',
  }
})