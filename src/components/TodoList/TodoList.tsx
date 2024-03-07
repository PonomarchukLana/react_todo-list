import { FC } from 'react'
import cn from 'classnames'
import { Todo } from '../../types'
import './TodoList.scss'

type Props = {
  list: Todo[]
  toggleChecked: (id: number) => void
}

export const TodoList: FC<Props> = ({ list, toggleChecked }) => {
  const completed = list.filter((el) => el.completed).length
  const uncompleted = list.filter((el) => !el.completed).length

  return (
    <div className="list">
      <div className="list__count">
        {completed > 0 && <p>{completed} Completed</p>}
        {uncompleted > 0 && <p>{uncompleted} Uncompleted</p>}

        {!completed && !uncompleted &&
          <p>No tasks</p>
        }
      </div>

      <ul className="list__items">
        {
          list.map((el) => {
            return (
              <li
                className={
                  cn('list__item', {
                    'list__item--completed': el.completed,
                  })}
                onClick={(): void => toggleChecked(el.id)}
                key={el.id}
              >
                <input
                  type="checkbox"
                  className="list__item-checkbox"
                  checked={el.completed}
                  onChange={(): void => toggleChecked(el.id)}
                  id={`${el.id}`}
                />
                <label htmlFor={`${el.id}`}>
                  <span></span>
                </label>
                <p>
                  {el.value}
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
