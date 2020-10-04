import React, {useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, Button, Image, ScrollView, Alert} from 'react-native'
import { DATA } from '../data'
import {THEME} from '../theme'
import {Item, HeaderButtons} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {useDispatch, useSelector} from 'react-redux'
import { toggleBooked, removePost } from '../store/actions/post'

export const PostScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const postId = navigation.getParam('postId')
    const post = useSelector(state =>
        state.post.allPosts.find(p => p.id === postId)
    )

    const booked = useSelector(state =>
        state.post.bookedPosts.some(post => post.id === postId)
    )
    
    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])

    const toggleHandler = useCallback(() => {
        console.log('we are here')
        dispatch(toggleBooked(postId))
    }, [dispatch, postId])

    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler])


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
              { text: "Yes", onPress: () => {
                  navigation.navigate('Main')
                  dispatch(removePost(postId))
              } }
            ],
            { cancelable: false }
          );
    }

    if(!post){
        return null
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
    const booked = navigation.getParam('booked')
    const toggleHandler = navigation.getParam('toggleHandler')
    let iconName = (booked)? 'ios-star' : 'ios-star-outline'
    // let iconName = 'ios-star-outline'


    return {
        headerTitle: 'Post ' + postId,
        headerRight:(<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
            title={"Take photo"} 
            iconName={iconName}
            onPress={toggleHandler}
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