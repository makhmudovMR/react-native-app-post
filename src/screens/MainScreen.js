import React, {useEffect} from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    Button,
    FlatList,

} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {useDispatch, useSelector} from 'react-redux'
// import {DATA} from '../data'
import {Post} from '../components/Post'
import {loadPosts} from '../store/actions/post'

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId:post.id})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)
    console.log(allPosts)
    return (
        <View style={styles.center}>
            <FlatList 
            data={allPosts} 
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