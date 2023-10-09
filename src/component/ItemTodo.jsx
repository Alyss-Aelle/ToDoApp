import { View, Text, Button } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';

const ItemTodo = ({todo}) => {

      //** 
  /*/ 
  *  Afficher une tache
  *
  * */



        //** 
  /*/ 
  *  supprimer une tache
  *
  * */

  const supprimer = () => { 

    firestore()
                .collection('ToDo')
                .doc(todo.id)
                .delete()
   }

   const valider = () => { 

    firestore()
  .collection('ToDo')
  .doc(todo.id)
  .update({ status: !todo.status })
   }




  return (
    <View>
      {todo.status? <Text style={{textDecorationLine:'line-through'}}> {todo?.task} </Text>
      : <Text>{todo?.task}</Text>}


      <Button title='Del' onPress={supprimer}/>
      <Button title='Upd' onPress={valider}/>
    </View>
  )
}

export default ItemTodo