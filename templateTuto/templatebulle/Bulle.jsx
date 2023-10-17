import { View, Text, FlatList } from 'react-native'
import React from 'react'
import bulleStyles from './bulleStyles'
import { Avatar } from 'react-native-paper';
import ItemBulle from './ItemBulle';
import ForYou from './ForYou';

const youDatas = [
    {
        id: 1,
        // avatar: require("../Davis/Assets/images/user/avatar.png"),
        name: "Tiana Mango",
        rate: 4.3,
        poste: "Animation in After Effects",
        color: "#ffdbe4",
    },
    {
        id: 2,
        // avatar: require("../Davis/Assets/images/user/avatar.png"),
        name: "Dulce Bator",
        rate: 4.1,
        poste: "Mobile App Design",
        color: "#dedaff",
    },
    {
        id: 3,
        // avatar: require("../Davis/Assets/images/user/avatar.png"),
        name: "Lincoln Bator",
        rate: 4.5,
        poste: "Animation in After Effects",
        color: "#c9f2f0",
    },
    {
        id: 4,
        // avatar: require("../Davis/Assets/images/user/avatar.png"),
        name: "Livia Lubin",
        rate: 4.7,
        poste: "Teacher",
        color: "#ffdbe4",
    },
];

const datas = [
    {
        note:4.9,
        category:'UI/UX Design',
        work:'teacher',
        name:'Gutavo Kenter',
        image:'#',
      },
    {
        note:4.9,
        category:'UI/UX Design',
        work:'teacher',
        name:'Gutavo Kenter',
        image:'#',
      },
    {
        note:4.9,
        category:'UI/UX Design',
        work:'teacher',
        name:'Gutavo Kenter',
        image:'#',
      },
     
]
const Bulle = () => {
  return (
    <>
      <View style={bulleStyles.container}>

      <View style={bulleStyles.box1}>
      <Avatar.Image style={bulleStyles.image1} size={50} />
        <View style={bulleStyles.texts1}>
            <Text style={bulleStyles.titreP}> text 1 </Text>
            <Text style={bulleStyles.soustitre}>  text 2 </Text>
        </View>
      </View>


        <View style={bulleStyles.box2}>
            
        <Text style={bulleStyles.titres}>Top Courses</Text>

        <View style={bulleStyles.bloc1}>
            <FlatList 
                data={datas}
                horizontal 
                renderItem={({item}) => <ItemBulle data={item} />}
                keyExtractor={item => item.id}/>
            <View>
            </View>
        </View>


        <Text style={bulleStyles.titres}>For You</Text>

        <View  style={bulleStyles.bloc2}>
        <FlatList 
                data={youDatas}
                numColumns={'2'}
                renderItem={({item}) => <ForYou youData={item} />}
                keyExtractor={item => item.id}/>

        </View>
        </View>
      </View>
    </>
  )
}

export default Bulle