import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import burgerStyles from './burgerStyles'

const Burger = () => {
  return (
    <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2016/11/18/15/03/burger-1835192_1280.jpg'}}  style={burgerStyles.container}>
        <View style={burgerStyles.box1}>
        <Text style={burgerStyles.text}> Commande ton burger !</Text>
        </View>
    </ImageBackground>
  )
}

export default Burger