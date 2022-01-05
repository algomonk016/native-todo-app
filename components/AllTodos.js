import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  useSelector
} from 'react-redux'

import store from '../redux/store'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewHeight = height/4;

const AllTodos = () => {
  const todos = useSelector(() => store.getState().todos);

  const allTodos = todos.map((todo, ind) => (<Text key={ind++}> {todo} </Text>))

  return(
    <View
      style = {style.container}
    >
      <Text>
        All Todos
      </Text>

      <View>
        {allTodos}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
    flex: 8,
    marginBottom: 5
  }  
})

export default AllTodos;
