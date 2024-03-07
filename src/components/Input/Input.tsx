import { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import { Todo } from '../../types'
import { createNewId } from '../../utils/createNewId'
import { Button } from '../Button/Button'
import './Input.scss'

type Props = {
  onSubmit: (item: Todo) => void
  currentIds: number[]
}

export const Input: FC<Props> = ({ onSubmit, currentIds }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  
  useEffect(() => {
    if(error) {
      setTimeout(() => {
        setError(false)
      }, 2000)
    }
  }, [error])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (value.length <= 2) {
      setError(true)
      return
    }

    const item = {
      id: createNewId(currentIds),
      completed: false,
      value
    }

    onSubmit(item)
    setValue('')
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <div className={cn('form__input-wrapp', {
        'form__input-wrapp--error': error,
      })}
      >
        <input
          type="text"
          placeholder="What I need to do?"
          className="form__input"
          value={value}
          onChange={(e): void => setValue(e.target.value)}
        />

        <Button
          type="submit"
        >
          Add
        </Button>
      </div>

      {error &&
        <p
          className="form__error"
        >
          Should be more than 2 letters
        </p>
      }
    </form>
  )
}
