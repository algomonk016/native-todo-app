import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const Todo = ({text, onPress = () => {} }) => {
  return (
    <TouchableOpacity 
      onPress = {onPress}
      style = {style.container}
    >
      <Text style = {style.text}> {text} </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 4,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
})

export default Todo
