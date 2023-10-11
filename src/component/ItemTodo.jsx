import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import styles from '../styles';

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
    <View style={styles.List}>
      {todo.status? <Text style={{textDecorationLine:'line-through'}}> {todo?.task} </Text>
      : <Text style={styles.textList}>{todo?.task}</Text>}


      <Button style={styles.buttonDel} title='Del' onPress={supprimer}/>
      <Button style={styles.buttonUpd} title='Upd' onPress={valider}/>
    </View>
  )
}

export default ItemTodo