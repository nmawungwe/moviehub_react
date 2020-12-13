import React, { Component, useCallback } from 'react';
import { StyleSheet, Text, View, Linking, Alert, Button } from 'react-native'

const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {

        // Checking if the link is supported for the links with custom URL scheme 
        const supported = await Linking.canOpenURL(url);

        if (supported){
            // opening the link with some app, if the URL scheme is "http" the web link should be opened or some browser in the mobile

            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL : ${url}`);
        } 
    }, [url]);

    return <Button title={children} onPress={handlePress}/> 
}

export default function MovieScreen({route, navigation}) {
    const { title, year, poster } = route.params;

    return(
            <View style={styles.container}>
                <Text>Title: {JSON.stringify(title)}</Text>
                <Text>Year: {JSON.stringify(year)}</Text>
                <OpenURLButton url={poster}>Poster</OpenURLButton>
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