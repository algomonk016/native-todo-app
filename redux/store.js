import {
  createStore,
  applyMiddleware
} from 'redux'

import reducer from './reducers'

const store = createStore(reducer)
console.log('store is ', store)

export default store;
