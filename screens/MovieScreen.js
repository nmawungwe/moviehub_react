import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function MovieScreen({route, navigation}) {
    const { title, year } = route.params;

    return(
            <View style={styles.container}>
                <Text>Title: {JSON.stringify(title)}</Text>
                <Text>Year: {JSON.stringify(year)}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})