import { FC, ReactNode } from 'react'
import './Container.scss'

type Props = {
  children: ReactNode
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
