import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import ItemTodo from './ItemTodo';

const ListerTodo = () => {

  //** 
  /*/ 
  *  Afficher les taches
  *
  * */

  //initialisation données
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true) ;



  useEffect(() => {
    console.log('lister')

    //abonnement a toute les modifications de la base de données
    firestore().collection('ToDo').onSnapshot(querySnapshot => {

      // console.log('querySnapshot' , querySnapshot);

      //recuperation données a afficher 
      const dataTodos = [] ;


          //lecture document 
          querySnapshot.forEach(doc=>{

            // console.log(doc.data())

            //recuperation données a afficher => envoie dans le tableau
            dataTodos.push({ id :doc.id,
                              ...doc.data()
                            })
          })
          setTodos(dataTodos) ;


      //si ça charge on arrete le chargement
      loading && setLoading(false) ; 
    })
    
  }, [])
  
  return (
    <View>
      {loading ? <ActivityIndicator animating={true}
      /> :
          <FlatList data={todos}
        renderItem={({item}) => <ItemTodo todo={item} />}
      keyExtractor={item =>item.id}
      />}
    </View>
  )
}

export default ListerTodo