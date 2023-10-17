import { View, Text,Image } from 'react-native'
import React from 'react'
import plantStyles from './plantStyles'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemPop = ({product}) => {
  return (
    <View style={plantStyles.containItemPop}>
                <Image source={{uri:product.thumbnail}} style={plantStyles.image2}/>
                <View>
                <Text>{product.title}</Text>
      <Text> $ {product.price}</Text>

                </View>
                <Icon name='favorite-border' size={30} color='#fff' />
    </View>
  )
}

export default ItemPop