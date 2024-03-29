import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../components/Input/Input'
import { TodoList } from '../../components/TodoList/TodoList'
import {
  add,
  toggleCompleted,
  filterState,
  filteredTodos,
} from '../../features/todosSlice'
import { Filters } from '../../components/Filters/Filters'
import { ActionType } from '../../types'
import { Container } from '../../components/Container/Container'
import './Todos.scss'

export const Todos: FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(filteredTodos)

  return (
    <Container>
      <div className="section">
        <h1 className="section__title">Todo</h1>

        <Input
          onSubmit={(todoItem): ActionType => dispatch(add(todoItem))}
          currentIds={todoList.map(({ id }) => id)}
        />

        <Filters
          getCurrentFilter={(value): ActionType => dispatch(filterState(value))}
        />

        <TodoList
          list={todoList}
          toggleChecked={(id): ActionType => dispatch(toggleCompleted(id))}
        />
      </div>
    </Container>
  )
}
