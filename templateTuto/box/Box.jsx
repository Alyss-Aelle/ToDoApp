import { View, Text } from 'react-native'
import React from 'react'
import boxStyles from './boxStyles'

const Box = () => {
  return (
    <View style={boxStyles.container}> 
        <View style={boxStyles.bloc2}>
        </View>
        <View style={boxStyles.bloc3}>
            <View style={boxStyles.bloc4}>
            </View>
        </View>
    </View>
  )
}

export default Box