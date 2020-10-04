import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {THEME} from '../theme'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {BookedScreen} from '../screens/BookedScreen';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AboutScreen} from '../screens/AboutScreen'
import {CreateScreen} from '../screens/CreateScreen'

// research this how the router is work


const Navigator = createStackNavigator({
    Main:MainScreen,
    Post:PostScreen
},
{
    initialRouteParams: 'Main',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor:'#fff'
    }
})

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post:PostScreen,
},
{
    initialRouteParams: 'Main',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor:'#fff'
    }
})

const BottomNavigator = createBottomTabNavigator({
    Post: {
        screen: Navigator,
        navigationOptions: {
          tabBarIcon: info => (
            <Ionicons name='ios-albums' size={25}  color={info.tintColor}/>
          )
        }
      },
      Booked: {
        screen: BookedNavigator,
        navigationOptions: {
          tabBarIcon: info => (
            <Ionicons name='ios-star' size={25} color={info.tintColor}/>
          )
        }
      }
});

const AboutNavigator = createStackNavigator({
  About:AboutScreen,

},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
  }
})

const CreateNavigator = createStackNavigator({
  About:CreateScreen,

},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
  }
})

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
    navigationOptions:{
      drawerLabel: 'Main'
    }
  },
  About:{
    screen: AboutNavigator,
    navigationOptions:{
      drawerLabel: 'About'
    }
  },
  Create:{
    screen: CreateNavigator,
    navigationOptions:{
      drawerLabel: 'Create'
    }
  },
})
export const AppNavigator = createAppContainer(MainNavigator)