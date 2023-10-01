import type { FC } from 'react'

import cls from './PageLoader.module.scss'
import classNames from 'classnames'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classNames(cls.PageLoader)}>
      <Loader />
    </div>
  )
}

export default PageLoader
