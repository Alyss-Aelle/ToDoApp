import { StyleSheet } from "react-native";



export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#000",
        flexDirection:'columm',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    bigBox:{
        marginTop:100,
        marginRight:70,
        width:300,
        height:200,
       
        alignItems:'center',
        justifyContent:'flex-start',

    },
    bigBox2:{
        marginTop:200,

        width:300,
        height:200,
       
        alignItems:'center',
        justifyContent:'flex-start',

    },
    contain:{
        width:300,
        height:50,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'flex-end',
        marginRight:10,
        marginBottom:20,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:40,
        color:'black',
        fontStyle:'italic',
    },
    text2:{
        fontSize:20,
        color:'black',
        
    },
    text3:{
        fontSize:30,
        color:'black',

        
    }
})