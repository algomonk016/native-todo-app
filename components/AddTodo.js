import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  TodoInputField,
  AddTodoButton
} from './'

const AddTodo = () => {
  return (
    <View>
      <Text>
        This is add todo
      </Text>

      <TodoInputField />
    </View>
  )
}
export default AddTodo
