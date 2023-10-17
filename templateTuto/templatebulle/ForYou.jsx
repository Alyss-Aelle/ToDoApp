import { View, Text } from 'react-native'
import React from 'react'
import bulleStyles from './bulleStyles'
import { Avatar } from 'react-native-paper'

const ForYou = ({youData}) => {
  return (
    <View style={bulleStyles.boxYou}>

    <View style={bulleStyles.boxYouProfil}>
<Avatar.Image style={bulleStyles.boxTopImg} size={25} />
      <Text style={bulleStyles.boxYouName}>{youData.name}</Text>
    </View>

      <View style={bulleStyles.boxYouDesc}>


      <Text style={bulleStyles.boxYouRate} >{youData.rate}</Text>
      <Text style={bulleStyles.boxYouPoste}>{youData.poste}</Text>
      </View>

    </View>
  )
}

export default ForYou