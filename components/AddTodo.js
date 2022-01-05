import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  TodoInputField,
  AddTodoButton
} from './'

const AddTodo = () => {
  return (
    <View style = {style.container}>
      <TodoInputField />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default AddTodo
