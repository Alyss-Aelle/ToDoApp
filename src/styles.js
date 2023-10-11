import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#A2CEC9',
        padding:10,
    },
    addInput:{
        borderColor: 'white' , 
        borderWidth:1 , 
        borderRadius: 20,
        marginBottom:50,
    },
    todo:{
        color:"white",
        margin: 80, 
        fontSize:50,
        
    },
    buttonDel:{
        flex:1,
        backgroundColor:'#A2CEC9',
        width:6, 
        borderColor: 'white' , 
        borderWidth:1 , 
        borderRadius: 20,
        

    },
    buttonUpd:{
        flex:1,
        backgroundColor:'#A2CEC9',
        width:6, 
        borderColor: 'white' , 
        borderWidth:1 , 
        borderRadius: 20,
        

    },
    List:{
        backgroundColor:"#FFFFFF",
        borderRadius: 20,
        flexDirection:"row",
        
        justifyContent:'space-between',
        marginBottom:50,
        
    },
    textList:{
        flex:2,
    }

})