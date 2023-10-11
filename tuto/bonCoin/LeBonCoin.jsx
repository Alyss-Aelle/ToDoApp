import { View, Text, FlatList } from 'react-native'
import React from 'react'
import leboncoinstyles from './leboncoinstyles'
import ItemCoin from './ItemCoin'
import { products } from './data'

const LeBonCoin = () => {
  return (
    <View style={leboncoinstyles.container}>
      <FlatList
      data={products}
      renderItem={({item}) => <ItemCoin product={item} />}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default LeBonCoin