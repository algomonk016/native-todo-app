import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
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
    <View style = {styles.container}>
      <TextInput 
        style = {styles.textInput}
        value = {todo}
        onChangeText = {(text) => setTodo(text)}
        placeholder = 'Write a task'
        placeHolderTextColor = 'coral'
        // keyboardType= 'numeric'
      />
      <AddTodoButton onPress = {addTodoFunction} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 250,
    backgroundColor: 'transparent',
    flex: 5,
    borderRadius: 10,
    paddingLeft: 10,
    color: '#ff4c00',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'coral'
  },
  container: {
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default TodoInputField
