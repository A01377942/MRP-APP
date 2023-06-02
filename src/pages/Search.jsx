import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, {useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import useExamanes from '../hooks/useExamanes'
import { useNavigation } from '@react-navigation/native'
import Exam from '../components/Exam';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [examenes, setExamenes] = useState([])
  const { buscarExamen } = useExamanes()
  const navigation = useNavigation()


  const handleSearch = async () => {
    console.log('Realizando búsqueda:', searchText);
    setExamenes([])
    try {
      const examenesObtenidos = await buscarExamen(searchText)
      setExamenes(examenesObtenidos)
    } catch (error) {
      console.log(error)
    }
  }

  const handleExamPress = (examen) => {
    navigation.navigate('ExamDetail', { examen });
  };

  const handleIconPress = () => {
    handleSearch();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TituloPrincipal}>MRP Capacitaciones</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.button} onPress={handleIconPress}>
          <FontAwesome name="search" size={24} color ='#9A9A9A' style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.additionalContent}>
        <ScrollView vertical>
            {examenes?.map((examen) => (
              <TouchableOpacity key={examen?._id} onPress={() => handleExamPress(examen)}>
                <Exam examen={examen} />
              </TouchableOpacity>
              )
            )}
          </ScrollView>
      </View>
    </View>
  )
}

export default Search

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
  searchContainer: {
    marginVertical: '10%',
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
  },
  additionalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
})