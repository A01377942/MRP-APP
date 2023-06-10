import React from 'react'
import {View, Text, StyleSheet, Settings} from 'react-native'
import Constants from 'expo-constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Login global state
import useAuth from '../hooks/useAuth';

//Screens
import Onboarding from '../pages/Onboarding'
import Login from '../pages/Login'
import Navigation from '../pages/Navigation'
import Register from '../pages/Register'
import PasswordRestart from '../pages/PasswordRestart'
import ExamDetail from '../pages/ExamDetail';
import ExamQuestions from '../pages/ExamQuestions';
import GratePage from '../pages/GratePage';
import ExamHistori from '../pages/ExamHistori';

/**
 * rnfes
 */
const Stack = createNativeStackNavigator()

function Main() {
const { isSignedIn } = useAuth()
  return (
        <View style={styles.container}>
            {isSignedIn ? (
                    <Stack.Navigator>
                       <Stack.Screen name='navigation' component={Navigation} options={{ headerShown: false }}/>
                       <Stack.Screen name="ExamDetail" component={ExamDetail} options={{ headerShown: false }}/>
                       <Stack.Screen name="ExamQuestions" component={ExamQuestions} options={{ headerShown: false }}/>
                       <Stack.Screen name="GradePage" component={GratePage} options={{ headerShown: false }}/>
                       <Stack.Screen name="ExamHistory" component={ExamHistori} options={{ headerShown: false }}/>
                    </Stack.Navigator>
                ): (
                    <Stack.Navigator
                        initialRouteName='Onboarding'
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
                        <Stack.Screen name="PasswordRestart" component={PasswordRestart} options={{ headerShown: false }}/>
                        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
                    </Stack.Navigator>
                )
                
            }
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
