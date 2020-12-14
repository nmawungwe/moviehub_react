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


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Movie Hub</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={this.titleHandler}
          placeholder="Enter movie title"
          value={this.state.title}
        />
        <Button 
          color='#4d4dff'
          title="Search"  
          onPress={() => {
          const title = this.state.title
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
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color:	'#4d4dff'
  },
  inputText: {
    height: 40,
    width: 240,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },

});
