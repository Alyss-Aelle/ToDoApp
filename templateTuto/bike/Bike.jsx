import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import bikeStyles from './bikeStyles'

const Bike = () => {
  return (
    <ImageBackground source={{uri: 'https://media.istockphoto.com/id/496356200/fr/photo/la-vue-sur-le-guidon-de-moto.jpg?s=612x612&w=0&k=20&c=mAFcvq73t6aJvajHHkuKqMp52ADsOEaV2ObNSA6WoaU='}} style={bikeStyles.container}>
      <View style={bikeStyles.bigBox}>
        <Text style={bikeStyles.text}> Be a Biker </Text>
      </View>
      <View style={bikeStyles.bigBox2}>
        <Text style={bikeStyles.text3}>Go on an Adventure </Text>
      </View>
      <View style={bikeStyles.contain}>
        <Text style={bikeStyles.text2}> Start</Text>
      </View>
    </ImageBackground>
  )
}

export default Bike