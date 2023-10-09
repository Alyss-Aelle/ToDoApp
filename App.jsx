import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Todo from './src/Todo'
import styles from './src/styles'
import AddTodo from './src/component/AddTodo'
import ListerTodo from './src/component/ListerTodo'



const App = () => {

 
  
  return (
    <View style={styles.container}>
      <AddTodo />
      <ListerTodo/>
    </View>
  )
}

export default App
