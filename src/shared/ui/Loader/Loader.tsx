import type { FC } from 'react'
import './Loader.scss'
import classNames from 'classnames'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = () => {
  return (
      <div className={classNames('lds-ellipsis')}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}

export default Loader
