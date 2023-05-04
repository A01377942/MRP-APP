import React, { useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Routes, Route} from 'react-router-native'
import Constants from 'expo-constants'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PasswordRestart from '../pages/PasswordRestart'
import Onboarding from '../pages/Onboarding'

/**
 * rnfes
 */

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

function Main() {
  return (
        <View style={styles.container}>
               {/*} <Routes>
                    <Route exact path="/" Component = { Login } />
                    <Route exact path="/register" Component = { Register } />
                    <Route exact path="/passwordRestart" Component = { PasswordRestart } />
                    <Route Component ={ Login } />
                </Routes>
                */}
            <Onboarding />
        </View>
  )
}

export default Main
