import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native'

import {
  useSelector
} from 'react-redux'

import store from '../redux/store'
import {
  Todo
} from './'

const AllTodos = () => {
  const todos = useSelector(() => store.getState().todos);

  const markComplete = (e) => {
    console.log('clicked on', e)
  }

  const allTodos = todos.map((todo, ind = 0) => (
    <Todo key={ind++} text = {todo} onPress = {() => markComplete(ind)}  />
  ))

  const renderItem = ({ item, index }) => {
    return (
      <Todo text = {item} onPress = {() => markComplete(index)} />
    )
  }

  return(
    <View
      style = {style.container}
    >
      <View style = {style.headingContainer}>
        <Text style = {style.heading}> All Todos </Text>
      </View>

      <FlatList 
        data = {todos}
        renderItem = {(item, index) => renderItem(item, index)}
        keyExtractor = {(item, ind) => ind}
      />

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 8,
    marginBottom: 5
  },
  heading: {
    fontSize: 25,
  },
  headingContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    paddingVertical: 5,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10
  },
  list: {
    flex: 1,
  }
})

export default AllTodos;
