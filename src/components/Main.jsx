import React, { useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from '../pages/Onboarding'
import Login from '../pages/Login'
import Navigation from '../pages/Navigation'
import Register from '../pages/Register'
import PasswordRestart from '../pages/PasswordRestart'
/**
 * rnfes
 */
const Stack = createNativeStackNavigator()


function Main() {
  return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Onboarding'
                    screenOptions={{ headerShown: false, independent: true }}
                >
                    <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen 
                        name="Register" 
                        component={Register} 
                        options={{
                                headerShown: false
                        }}
                    />
                    <Stack.Screen name="PasswordRestart" component={PasswordRestart} options={{ headerShown: false }}/>
                    <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
                    <Stack.Screen name='Main' component={Navigation} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        flex: 1
    },
    menu:{
        flexDirection:'column'
    }
})

export default Main
