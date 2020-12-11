import React, { Component, useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';



    
    // const getMoviesFromApiAsync = ({route, navigation}) => {
    //         const {title} = route.params
    //         console.log(title)

    //         fetch(`http://www.omdbapi.com/?s=${title}&apikey=62927f24`).then(response => response.json()).then((json)=>{
    //         console.log(json)
    //         }).catch((error) => console.error(error))
    // } 

    // getMoviesFromApiAsync()


    // const DATA = [
    //     {
    //     Title: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     Year: 'First Item',
    //     },
    //     {
    //         Title: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //         Year: 'Second Item',
    //     },
    //     {
    //         Title: '58694a0f-3da1-471f-bd96-145571e29d72',
    //         Year: 'Third Item',
    //     },
    // ];

    // const getMoviesFromApiAsync = () => {
    //     // const {title} = route.params
    //     // console.log(title)

    //     fetch("http://www.omdbapi.com/?s=terminator&apikey=62927f24").then(response => response.json()).then((json)=>{
    //     console.log(json)
    //     }).catch((error) => console.error(error))
    // }

    // const DATA = getMoviesFromApiAsync()

    // const Item = ({ Title, Year, id}) => {
    //     return(
    //         <View>
    //             <Text>{Title}</Text>
    //             <Text>{Year}</Text>
    //         </View>
    //     )
    // }

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
        // const getMoviesFromApiAsync = () => {
        //     const {title} = route.params
        //     console.log(title)

        //     fetch(`http://www.omdbapi.com/?s=${title}&apikey=62927f24`).then(response => response.json()).then((json)=>{
        //     console.log(json)
        //     }).catch((error) => console.error(error))
        // } 

        // const DATA = getMoviesFromApiAsync()    

        // const renderItem = ({ item })=> (
        //     <Item 
        //         Title={item.Title}
        //         Year={item.Year}
        //         // id ={item.imdbID}
        //     />
        // )

        // getMoviesFromApiAsync()
        
        // return(
        //         <SafeAreaView style={styles.container}>
        //             <Text>Hi</Text>
        //             <FlatList
        //                 data={DATA}
        //                 renderItem={renderItem}
        //                 // keyExtractor={item => item.id}
        //             />
        //         </SafeAreaView>    
        //     )

        return (
            <View style={styles.container}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index ) => id}
                        renderItem={({item}) => (
                        <Text>{item.Title}, {item.Year}</Text>
                        )}
                    />
                )}
            </View>
        )
    }

    // export default MovieListScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }
    })