import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import MovieListScreen from './screens/MovieListScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        />
      <Stack.Screen 
        name="Movies" 
        component={MovieListScreen}
        />
    </Stack.Navigator>
  )
}

export default function App() {

    return (
            <NavigationContainer>
              <MyStack />
            </NavigationContainer>
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
});
