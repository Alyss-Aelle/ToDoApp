import { View, Text } from 'react-native'
import React from 'react'
import { products } from '../../tuto/bonCoin/data'
import plantStyles from './plantStyles'

const ItemCat = ({product}) => {
  return (
    <View>
      <Text style={plantStyles.textCat}>{product.category}</Text>
    </View>
  )
}

export default ItemCat