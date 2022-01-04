import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  AddTodo,
  AllTodos
} from '../components'

const Todo = () => {
  return (
    <View>
      <Text>
        <AllTodos />
        <AddTodo />
      </Text>
    </View>
  )
}

export default Todo
