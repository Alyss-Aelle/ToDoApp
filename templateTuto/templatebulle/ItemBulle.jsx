import { View, Text } from 'react-native'
import React from 'react'
import bulleStyles from './bulleStyles'
import { Avatar } from 'react-native-paper'

const ItemBulle = ({data}) => {
  return (
    <View style={bulleStyles.boxTop}>
            
            <View style={bulleStyles.boxTopNote}>

                <Text style={bulleStyles.boxTopNoteText} >{data.note}</Text>
            </View>
                <Text style={bulleStyles.boxTopCat}>{data.category}</Text>

            <View style={bulleStyles.boxTopDesc}>
            <Avatar.Image style={bulleStyles.boxTopImg} size={50} />
                <View style={bulleStyles.texts2} >
                <Text style={bulleStyles.boxTopWork}>{data.work}</Text>
                <Text style={bulleStyles.boxTopName}>{data.name}</Text>
                </View>
            </View>
    </View>
  )
}

export default ItemBulle