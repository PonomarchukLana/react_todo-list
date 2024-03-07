import { FC, useState } from 'react'
import { Button } from '../Button/Button'
import { Filter } from '../../types'
import './Filters.scss'

type Props = {
  getCurrentFilter: (value: Filter) => void
}

export const Filters: FC<Props> = ({ getCurrentFilter }) => {
  const [currentFilter, setCurrentFilter] = useState(Filter.All)

  const handleOnClick = (value: Filter): void => {
    setCurrentFilter(value)
    getCurrentFilter(value)
  }

  return (
    <div className="filters">
      {[Filter.All, Filter.Completed, Filter.Current].map(title =>
        <Button
          key={title}
          type="button"
          classname={currentFilter === title ? 'is-active' : ''}
          onclick={(): void => handleOnClick(title)}
        >
          {title}
        </Button>
      )}
    </div>
  )
}
