import { View, Text,Image } from 'react-native'
import React from 'react'
import { products } from '../../tuto/bonCoin/data'
import plantStyles from './plantStyles'

const ItemPlant = ({product}) => {
  return (
    <View style={plantStyles.containItem}>
        <Image source={{uri:product.thumbnail}} style={plantStyles.image}/>
      <Text  style={plantStyles.textPro}>{product.title}</Text>
      <Text style={plantStyles.textPrice}> $ {product.price}</Text>
    </View>
  )
}

export default ItemPlant