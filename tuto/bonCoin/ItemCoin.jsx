import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import leboncoinstyles from './leboncoinstyles'
import Icon from 'react-native-vector-icons/MaterialIcons';


const ItemCoin = ({product}) => {

    const goTo = () => { 
        console.log('product',product.id)
     }
  return (
    <TouchableOpacity onPress={goTo} style={leboncoinstyles.cardContainer}>
      <ImageBackground source={{uri:product.thumbnail}} resizeMode='cover' imageStyle={{borderRadius:20}} style={leboncoinstyles.cardImage}>
        <View style={leboncoinstyles.favIcon}>
            <Icon name='favorite-border' size={30} color='#fff' />
        </View>

        </ImageBackground>
        <View style={leboncoinstyles.containerTitlePrice}>
            <Text style={leboncoinstyles.title}>{product.title}</Text>
            <Text style={leboncoinstyles.price}>{product.price}$</Text>
      </View>
      <View style={leboncoinstyles.containerBrand}>
        <Text style={leboncoinstyles.brand}>{product.brand}</Text>
        <Text style={leboncoinstyles.brand}>{product.category}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemCoin