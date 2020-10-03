import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {THEME} from '../theme'
import {createBottomTabNavigator} from 'react-navigation-tabs'
const Navigator = createStackNavigator({
    Main:MainScreen,
    Post:PostScreen
},
{
    initialRouteName: 'Main',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor:'#fff'
    }
})

const BookedNavigaor = createStackNavigator({
    Booked: BookedScreen,
    Post:PostScreen,
},
{
    initialRouteName: 'Main',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor:'#fff'
    }
})
// 73 видео (7 урок)
const BottomNavigator = createBottomTabNavigator();

export const AppNavigator = createAppContainer(Navigator)