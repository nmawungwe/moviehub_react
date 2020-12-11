import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class HomeScreen extends Component {

  state = {
            title: '',
  }

  titleHandler = title => {
    this.setState({title})
  }

  

//   searchMovieFromApi = () => {
//     const title = this.state.title

//     fetch(`http://www.omdbapi.com/?s=${title}&apikey=62927f24`).then(response => response.json()).then((json)=>{
//       console.log(json)
//     }).catch((error) => console.error(error))

//     // this.props.navigation.navigate("Movies")
    
//   }

  render(){
    return (
      <View style={styles.container}>
        <Text>Movie Hub</Text>
        <TextInput
          onChangeText={this.titleHandler}
          placeholder="Enter movie title"
          value={this.state.title}
        />
        <Button 
          title="Search"  
        //   onPress={this.searchMovieFromApi}      
          onPress={() => {
             
            const title = this.state.title

            // const movies = fetch(`http://www.omdbapi.com/?s=${title}&apikey=62927f24`).then(response => response.json()).then((json)=>{
            //     // console.log(json)
            //     }).catch((error) => console.error(error))

                this.props.navigation.navigate('Movies', {title:title})

          }}  
        />
      </View>
        )
      } 
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
