import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#CCC'

    },
    cardContainer:{
        
        padding:10,
    },
    cardImage:{
        width: width - 20,
        height:((width - 20)/3)*1.5,
        backgroundColor:'#CCC',
        borderRadius:20,
        alignItems:'flex-end',
    },
    favIcon:{
        width:40,
        height:40,
        margin:20,
        backgroundColor:"rgba(250,250,250,0,5)",
        borderRadius:15,
        opacity:0.4,
        alignItems:'center',
        justifyContent:'center'
    },
    containerTitlePrice:{
        flexDirection:'row',
        height:40,
        width:width -20,

        marginTop:10,
        justifyContent:"space-between",
        paddingHorizontal:20,
        alignItems:'center',
    },
    title:{
        fontSize:30,
        fontWeight:'600',
    },
    price:{
        fontSize:30,
        fontWeight:'600',
        color:'orange',
    },
    containerBrand:{
        flexDirection:'row',
        height:50,
        width:width -20,

        marginTop:10,
        paddingHorizontal:20,
        alignItems:'center',
    },
    brand:{
        color:'orange',
        backgroundColor:"#f9eee8",
        margin:5,
        padding:5,
        borderRadius:5,
    }
})