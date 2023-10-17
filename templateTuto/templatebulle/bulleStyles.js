import { StyleSheet } from "react-native";



export default StyleSheet.create({

    container:{
        flex:1,
        height:120,
        backgroundColor:'purple',

    },
    box1:{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:30,

    },

    image1:{
        marginRight:30,
        backgroundColor:'white',

   
    },
    texts1:{
        alignItems:'flex-start',
        justifyContent:'flex-start'

    },
    titreP:{
        color:'white',
        fontSize:30,
    },
    soustitre:{
        color:'white',
        fontSize:20,
    },
    box2:{
        flex:2,
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'flex-start',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
        paddingLeft:0,

    },
    titres:{
        color:'black',
        fontSize:30,
        paddingLeft:20,
        
    },
    bloc1:{
   
        height:250,
        width:400,
        // backgroundColor:'pink',
        flexDirection:'row',
        
    }, 
    boxTop:{
        height:200,
        width:270,
        borderRadius:30,
        backgroundColor:'pink',
        margin:10,
        justifyContent:'space-between',
        padding:20,
  

    },
    boxTopNote:{
        height:40,
        width:60,
        borderRadius:30,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    boxTopNoteText:{
        color:'black'
    },
    boxTopCat:{
        fontSize:25,
        color:'white',
    },
    boxTopDesc:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',


    },
    texts2:{
        paddingLeft:20,
    },
    boxTopWork:{
        fontSize:10,
        opacity:20,
    },
    boxTopName:{
        color:'white',
    },

    bloc2:{
        
        height:400,
        width:400,
        //  backgroundColor:'pink',
        flexDirection:'column',
        padding:7,
   
       
    }, 


    boxYou:{
        height:170,
        width:170,
        borderRadius:30,
        backgroundColor:'',
        margin:10,
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        backgroundColor:'gray'
    },
    boxYouProfil:{
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'orange',
        paddingBottom:15,
        width:150,
    },
    boxYouName:{
        paddingLeft:20
    },


    boxYouDesc:{
        height:120,
        width:170,
        borderRadius:30,
        backgroundColor:'white',
        justifyContent:'center',
        paddingLeft:20,
  

    },
    boxYouRate:{
        paddingTop:0,
        paddingRight:40,
        paddingBottom:20,
    },
    boxYouPoste:{

    },

})