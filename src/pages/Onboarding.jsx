import React, {useState, useRef} from 'react'
import {View, StyleSheet, FlatList, Animated} from 'react-native'
import slides from '../../slides'
import OnBoardingItem from '../components/OnBoardingItem'
import Paginator from '../components/Paginator'

function Onboarding() {
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

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
      <View style={{flex: 3}}>
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

        <Paginator data={slides} scrollX={scrollX} index={index} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
    
})

export default Onboarding
