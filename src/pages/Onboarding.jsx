import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, FlatList, Animated, TouchableOpacity} from 'react-native'
import slides from '../../slides'
import OnBoardingItem from '../components/OnBoardingItem'
import Paginator from '../components/Paginator'
import { useNavigation } from '@react-navigation/native'
import { Link } from '@react-navigation/native'

function Onboarding() {
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const navigation = useNavigation()

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event)
  }

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) =>{
    setIndex(viewableItems[0].index)
  }).current

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={slides} 
          renderItem={({item}) => <OnBoardingItem item={item} /> }
          horizontal
          pagingEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            >
            <Link to={{ screen: 'Login'}} style={styles.title}>Saltar</Link>
          </TouchableOpacity>

          <Paginator data={slides} scrollX={scrollX} index={index} />

          <TouchableOpacity>
            <Text style={styles.title}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    bottomContainer:{
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center'
  },
})

export default Onboarding
