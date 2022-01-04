import * as types from './types.js'

const addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    payload: todo
  }
}

const deleteTodo = todo => {
  return {
    type: types.DELETE_TODO,
    payload: todo
  }
}

export default {
  addTodo,
  deleteTodo
}
