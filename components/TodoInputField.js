import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

import {
  useDispatch
} from 'react-redux'

import {
  AddTodoButton
} from './'

import * as action from '../redux/actions'

const TodoInputField = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const addTodoFunction = () => {
    dispatch(action.default.addTodo(todo))
    setTodo('')
  }

  return (
    <View>
      <TextInput
        value = {todo}
        onChangeText = {setTodo}
        placeholder = 'input text here'
      />

      <AddTodoButton onPress = {addTodoFunction} />
    </View>
  )
}

export default TodoInputField
