import React, { useReducer } from 'react'

const initialState = {
  todoList: [],
  totals: 0,
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      state.todoList.pust('hello')
      return {
        ...state,
      }
    case 'DECREASE':
      return {
        ...state,
      }
    default:
      break
  }
}

export default function UseReducerExample() {
  //   const [todos, dispatch] = useReducer(todoReducer, initialState)

  //   const handleChange = todo => {
  //     dispatch({ type: 'DO_TODO', id: todo.id })
  //   }

  return <div>UseReducerExample</div>
}
