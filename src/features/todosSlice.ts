import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Filter, Todo } from '../types'

type TodoState = {
  todos: Todo[]
  filter: Filter
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      completed: false,
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      completed: true,
      value: "Lorem ipsum dolor sit amet.",
    }
  ],
  filter: Filter.All,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload)
    },

    toggleCompleted: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex(({ id }) => id === action.payload)
      state.todos[index].completed = !state.todos[index].completed
    },

    filter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload
    },
  },
})

export const { add, toggleCompleted, filter } = todosSlice.actions

export const filteredTodos = (state: RootState): Todo[] => {
  const { todos, filter } = state.todos

  switch (filter) {
    case Filter.Completed:
      return todos.filter((todo: Todo) => todo.completed)
    case Filter.Current:
      return todos.filter((todo: Todo) => !todo.completed)
    case Filter.All:
    default:
      return todos
  }
}

export default todosSlice.reducer
