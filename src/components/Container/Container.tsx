import { FC } from 'react'
import './Container.scss'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
