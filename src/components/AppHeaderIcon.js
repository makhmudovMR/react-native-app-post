import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import { Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
export const AppHeaderIcon = props => {
    return (
    <HeaderButton 
    {...props}
    iconSize={24} 
    IconComponent={Ionicons}
    color={'#fff'}
    />
    )
}