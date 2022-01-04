import React from 'react'
import { 
  View, 
  Text,
  SafeAreaView
} from 'react-native'
import { Provider } from 'react-redux'
import { Todo } from './screens'
import store from './redux/store'

const App = () => {
  return (
    <SafeAreaView>
      <Provider store = {store}>
        <Todo />
      </Provider>
    </SafeAreaView>
  )
}

export default App
