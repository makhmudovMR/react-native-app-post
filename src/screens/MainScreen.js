import React from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    Button,
    FlatList,

} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'


import {DATA} from '../data'
import {Post} from '../components/Post'

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId:post.id})
    }

    return (
        <View style={styles.center}>
            <FlatList 
            data={DATA} 
            keyExtractor={post => post.id.toString()}
            renderItem={(obj) => {
                console.log(obj)
                return <Post post={obj.item} onOpen={openPostHandler}/>
            }}
            />
        </View>
    )
}


MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Мой блог',
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
    }
})