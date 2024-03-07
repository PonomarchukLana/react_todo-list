import { FC } from 'react'
import cn from 'classnames'
import { Todo } from '../../types'
import './TodoList.scss'

type Props = {
  list: Todo[]
  toggleChecked: (id: number) => void
}

export const TodoList: FC<Props> = ({ list, toggleChecked }) => {
  const completed = list.filter(({ completed }) => completed).length
  const uncompleted = list.filter(({ completed }) => !completed).length

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
          list.map(({ id, completed, value }) =>
            <li
              className={cn('list__item', {
                'list__item--completed': completed
              })}
              onClick={(): void => toggleChecked(id)}
              key={id}
            >
              <input
                type="checkbox"
                className="list__item-checkbox"
                checked={completed}
                onChange={(): void => toggleChecked(id)}
                id={`${id}`}
              />
              <label htmlFor={`${id}`}>
                <span></span>
              </label>
              <p>
                {value}
              </p>
            </li>
          )
        }
      </ul>
    </div>
  )
}
