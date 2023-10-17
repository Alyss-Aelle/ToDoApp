import { StyleSheet } from "react-native";



export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#CCC",
        flexDirection:'columm',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    box:{
        width:300,
        height:70,
        backgroundColor:"white",
        alignItems:'flex-start',
        justifyContent:'center',

    },
    bigBox:{
        width:300,
        height:60,

        alignItems:'flex-start',
        justifyContent:'center',

    },
    bigBox1:{
        width:300,
        height:50,
        borderRadius:20,
        borderColor:'gray',
        borderWidth:1,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'flex-start',

    },
    bigBox2:{
        width:400,
        height:70,

        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:30,

    },
    bigBox3:{
        width:400,
        height:300,

        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:30,

    },
    bigBox4:{
        width:300,
        height:170,
        // backgroundColor:"green",
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
   

    },
    containItem:{
        padding:10,
        
    },
    containItemPop:{
        padding:10,

        height:50,
        width:300,
        flexDirection:'row',
        justifyContent: 'space-between'

    },
    text:{
        fontSize:50,
        color:'black',

    },
    text2:{
        fontSize:30,
        color:'black',
        paddingRight:170,
    },
    textPro:{
        fontSize:20,
        color:'black',

    },
    textPrice:{
        fontSize:20,
        color:'black',

    },
    textCat:{
        fontSize:30,
        color:'black',
        padding:10,

    
    },
    image:{
        width:150,
        height:200,
        borderRadius:30,
    },
    image2:{
        width:50,
        height:50,
        
        borderRadius:10,
    }
})