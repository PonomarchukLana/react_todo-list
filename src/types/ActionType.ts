import { Todo } from "./TodoTypes"
import { Filter } from "./Filter"

export type ActionType = {
  payload: number | Todo | Filter
  type: "todos/toggleCompleted" | "todos/add" | "todos/filter"
}
