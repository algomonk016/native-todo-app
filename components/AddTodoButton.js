import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const AddTodoButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress = {props.onPress}>
        <Text>Add Task </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodoButton
