import { View, Text } from 'react-native'
import React from 'react'
import AddTodo from './component/AddTodo'
import ListerTodo from './component/ListerTodo'
import styles from './styles'

const Todo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.todo}> To do List</Text>
      <AddTodo />
      <ListerTodo/>
    </View>
  )
}

export default Todo