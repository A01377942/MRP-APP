import React from 'react'
import {  
Image,
StyleSheet,
Text,
View,
Dimensions,
Animated,
Easing,} from 'react-native'

const {width, height} = Dimensions.get('screen')

function OnBoardingItem({ item }) {
    
    const translateYImage = new Animated.Value(10);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return(
        <View style={styles.container}>
            <Animated.Image
                source={item.image}
                resizeMode="contain"
                style={[
                styles.image,
                {
                    transform: [
                    {
                        translateY: translateYImage,
                    },
                    ],
                },
                ]}
            />
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width,
        height,
        alignItems: 'center'
    },
    image:{
        flex: 0.7,
        justifyContent: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: '5%',
        textAlign: 'center'
    },
    description:{
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})

export default OnBoardingItem