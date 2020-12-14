import React, { Component, useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'



export default MovieListScreen = ({route, navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const {title} = route.params

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=62927f24`)
        .then((response) => response.json())
        .then((json) => setData(json.Search))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);


    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={item => item.imdbID}
                    renderItem={({item}) => {         
                    return (    
                        <TouchableOpacity style={styles.item} onPress={()=>{
                            // setSelectedId(item.id)
                            navigation.navigate('Movie', {  
                                                            title: item.Title,
                                                            year: item.Year,
                                                            poster: item.Poster
                                                        })
                        }}>
                            <Text>{item.Title}</Text>
                        </TouchableOpacity>
                    )}}
                />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
            padding: 20
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: 'gray',
    }
})