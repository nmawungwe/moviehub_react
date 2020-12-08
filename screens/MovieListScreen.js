import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function MovieListScreen ({route, navigation}) {

    const {movies} = route.params
    console.log({movies})

    const Movie = ({ Title, Year}) => {
        <View>
            <Text>Movie: {Title}</Text>
            <Text>Year: {Year}</Text>
        </View>

    }

    const renderItem = ({ movie })=> (
        <Movie 
            Title={movie.Title}
            Year={movie.Year}
        />
    )

    return(
            <View style={styles.container}>
                <FlatList
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={movie => movie.imdbID}
                />
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
    }
})