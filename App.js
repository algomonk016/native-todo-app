import React from 'react'
import { 
  SafeAreaView,
  StyleSheet
} from 'react-native'
import { Provider } from 'react-redux'
import { Todo } from './screens'
import store from './redux/store'

const App = () => {
  return (
    <SafeAreaView style = {style.container}>
      <Provider store = {store}>
        <Todo />
      </Provider>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
