import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import {COLOR_PRINCIPAL} from '@env'

//Screens
import Home from './Home'
import Search from './Search'
import Settings from './Settings'

const Tab = createBottomTabNavigator()

const MyTabs = () => {
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: COLOR_PRINCIPAL,
                headerShown: false
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" size={size} color={color} /> ),
                    tabBarBadge: 10,
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name='Search' 
                component={Search} 
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color, size }) => ( <FontAwesome name="search" size={size} color={color} /> ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name='Settings' 
                component={Settings} 
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => ( <FontAwesome name="user" size={size} color={color} /> ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <MyTabs />
    )
}