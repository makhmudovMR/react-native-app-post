import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Button, Image, ScrollView, Alert} from 'react-native'
import { DATA } from '../data'
import {THEME} from '../theme'
import {Item, HeaderButtons} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId)

    // useEffect(() => {
    //     navigation.setParams({booked: post.booked})
    // })

    const removeHandler = () => {
        Alert.alert(
            "Delete Item",
            "Do you want delete this item?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }
    return (
        <ScrollView>
            <Image source={{url: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text>{post.text} {postId}</Text>
            </View>
            <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
}


PostScreen.navigationOptions = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId)
    
    let iconName = (post.booked)? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Post ' + postId,
        headerRight:(<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
            title={"Take photo"} 
            iconName={iconName}
            />
        </HeaderButtons>),
    }
}


const styles = StyleSheet.create({
    center:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:200
    },
    textWrap:{

    },
})