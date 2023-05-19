import { StyleSheet, Text, View, Image} from 'react-native'
import useExamanes from '../hooks/useExamanes'

const Home = () => {
  const { examenes } = useExamanes()
  return (
    <View style={styles.container}>
      <Text style={styles.TituloPrincipal}>MRP Capacitaciones</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: '100%'
  },  
  TituloPrincipal:{
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%'
  },
})