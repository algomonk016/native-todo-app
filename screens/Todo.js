import React from 'react'
import { 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  StyleSheet, 
  Text, 
  Platform, 
  TouchableWithoutFeedback, 
  Button, 
  Keyboard  
}from 'react-native';

import {
  AddTodo,
  AllTodos
} from '../components'

const Todo = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <AllTodos />
          <AddTodo />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "space-around"
  },
})

export default Todo
