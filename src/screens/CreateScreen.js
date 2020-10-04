import React, { useState } from 'react'
import {View,ScrollView,  Text, StyleSheet,TouchableWithoutFeedback,  TextInput, Image, Button, Keyboard} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import {useDispatch} from 'react-redux'
import {addPost} from '../store/actions/post'



export const CreateScreen = ({navigation}) => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const img = ''

    const createPostHandler = () => {
        if(text === ''){

        }
        let post = {
            text:text,
            date: new Date().toJSON(),
            img:img,
            booked: false,
        }
        dispatch(addPost(post))
        console.log('--->', post)
        navigation.navigate('Main')

    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View  style={styles.wrapper}>
                    <Text style={styles.title}>Create Screen</Text>
                    <TextInput style={styles.textArea} placeholder="Введите текст..." 
                    value={text} onChangeText={setText} multiline />
                    <Image style={{width:'100%', height:200, marginBottom:10}} source={{url:img}} />
                    <Button title={"Create post"} color={THEME.MAIN_COLOR} onPress={createPostHandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Create',
    headerRight:(<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item 
        title="Take photo" 
        iconName="ios-camera"
        />
    </HeaderButtons>),
    headerLeft: (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item 
        title="Toggle Drawer" 
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
        />
    </HeaderButtons>)
})

const styles = StyleSheet.create({
    wrapper:{
        padding:10
    },
    title:{
        marginVertical:10,
        fontSize:20
    },
    textArea:{
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#000', 
        padding:10,
        marginBottom:10
    }
})