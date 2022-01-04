import * as types from './types'
import store from './store'
const initial = {
  todos: [],
  completed: []
}

const reducer =  (state = initial, action) => {
  switch(action.type){
    case types.ADD_TODO:
      console.log('action is', action)
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case types.DELETE_TODO:
      return {
        ...state
      };
    default: 
      return state;
  }
}

export default reducer;
