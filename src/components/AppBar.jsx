import React from 'react'
import { View, StyleSheet, ScrollView, Text} from 'react-native'
import Constants from 'expo-constants'
import { Link, useLocation } from 'react-router-native'
import { TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10
    },
    text: {
        paddingHorizontal: 10
    },
    scroll:{
        paddingBottom: 15
    }
})

const AppBarTab = ({children, to}) =>{
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component = {TouchableWithoutFeedback}>
           <Text>
                {children}
            </Text> 
        </Link>
    )
}

function AppBar() {
    return (
        <View style = {styles.container}>
            <ScrollView horizontal style = {styles.scroll}>
                <AppBarTab to='/'> Login </AppBarTab>
                <AppBarTab to='/register'> Register </AppBarTab>
            </ScrollView>
        </View>

    )
}

export default AppBar
