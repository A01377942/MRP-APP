import { StyleSheet, Animated, View, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('screen')

const Paginator = ({ data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {
        data.map((_,id) =>{
            const inputRange = [(id-1)*width, width * id, ( id + 1 ) *  width]

            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [12, 12, 12],
                extrapolate: 'clamp'
            })

            const backgroundColor = scrollX.interpolate({
                inputRange,
                outputRange: ['#ccc', '#0038FF', '#ccc'],
                extrapolate: 'clamp'
            })

            return <Animated.View 
                key = {id.toString()} 
                style={[styles.dot, { width: dotWidth, backgroundColor },
                //id == index && styles.dotActive
            ]} 
            />
        })
      }
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },  
    dot:{
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc'
    },
    dotActive:{
        backgroundColor: 'black'
    }
})

{/**
container:{
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },  

*/}