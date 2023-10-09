import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles'
import firestore from '@react-native-firebase/firestore';

const AddTodo = () => {


      //** 
  /*/ 
  *  ajout une tache dans un formulaire
  *
  * */

  const [task, setTask] = useState(""); 

  //envoie la valeur de l'input dans la base 
  const send  = (value) => { 
    console.log("send", value) ; 

    firestore()
              .collection('ToDo')
              .add({
                    task: value, 
                    statue: false,
                    dateins : Date.now() ,
              })
    setTask("") ;
   }
  return (
    <View>
      <TextInput
       style={styles.addInput}
       onSubmitEditing={(value) => send(value.nativeEvent.text)}
       value={task}
       onChangeText={text => setTask(text)}
       />
    </View>
  )
}

export default AddTodo