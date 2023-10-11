import { StyleSheet } from "react-native";



export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#000",
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    bigBox:{

        width:800,
        height:400,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'purple',
    },
    contain:{
        width:700,
        height:50,
        backgroundColor: 'green',
        flexDirection:'row',
        alignItems:'center',
        marginRight:10,
    },
    box1:{
        flex:1,
        width:50 ,
        height:50 ,
        backgroundColor:'blue',
        marginRight:10,
    },
    box2:{
        
        width:50 ,
        height:50 ,
        backgroundColor:'orange',
        marginRight:10,
    },
    box3:{
        
        width:50 ,
        height:50 ,
        backgroundColor:'pink',
    }
})