import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Row = props => (
    <TouchableOpacity onPress={()=>{
        props.onSelectMovie(props)
    }}>
        <Text>{props.item}</Text>
    </TouchableOpacity>
)

export default Row