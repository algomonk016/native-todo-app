import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const AddTodoButton = (props) => {
  return (
    <View style={style.button}>
      <TouchableOpacity onPress = {props.onPress}>
        <Text style={style.text}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#65D9BD',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color: 'green',
  }
})

export default AddTodoButton
