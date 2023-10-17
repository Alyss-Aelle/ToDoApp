import { View, Text, FlatList } from 'react-native'
import React from 'react'
import plantStyles from './plantStyles'
import { products } from '../../tuto/bonCoin/data'
import ItemCat from './ItemCat'
import ItemPlant from './ItemPlant'
import ItemPop from './ItemPop'
import { TextInput } from 'react-native-paper'

const Plants = () => {
  return (
    <View style={plantStyles.container}>
        <View  style={plantStyles.box} >
        <Text>Icons </Text>
        </View>
        <View style={plantStyles.bigBox}>
        <Text style={plantStyles.text}>Discover </Text>
        </View>
 
        <View  style={{paddingTop:20}}>
        <TextInput style={plantStyles.bigBox1}
      label="search.."

    />
        </View>


        <View style={plantStyles.bigBox2}>
        <FlatList
        horizontal 
      data={products}
      renderItem={({item}) => <ItemCat product={item} />}
      keyExtractor={item => item.id}
      />
        </View>
        <View style={plantStyles.bigBox3}>
        <FlatList
        horizontal 
      data={products}
      renderItem={({item}) => <ItemPlant product={item} />}
      keyExtractor={item => item.id}
      />
        </View>
        <View style={plantStyles.bigBox4} >
        <Text style={plantStyles.text2}>Popular</Text>
        <FlatList
      data={products}
      renderItem={({item}) => <ItemPop product={item} />}
      keyExtractor={item => item.id}
      />
        </View>


    </View>
  )
}

export default Plants