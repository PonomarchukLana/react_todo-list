import { FC } from 'react'
import cn from 'classnames'
import './Button.scss'

type Props = {
  type: "submit" | "reset" | "button" | undefined
  children: string
  classname?: string
  onclick?: () => void
}

export const Button: FC<Props> = ({ type, children, classname, onclick }) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={cn('button', `button--${[type]}`, classname)}
    >
      {children}
    </button>
  )
}
