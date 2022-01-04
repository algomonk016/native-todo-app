import React from 'react'
import {
  Text,
  View
} from 'react-native'

import {
  useSelector
} from 'react-redux'

import store from '../redux/store'

const AllTodos = () => {
  const todos = useSelector(() => store.getState().todos);
  console.log('todos', todos)

  const allTodos = todos.map((todo, ind) => (<Text key={ind++}> {todo} </Text>))

  return(
    <View>
      <Text>
        All Todos
      </Text>

      <View>
        {allTodos}
      </View>
    </View>
  )
}

export default AllTodos;
