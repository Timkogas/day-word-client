import type { FC } from 'react'

import cls from './NotFoundPage.module.scss'
import classNames from 'classnames'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = () => {

  return (
      <div className={classNames(cls.NotFoundPage)}>
          Страница не найдена
      </div>
  )
}

export default NotFoundPage
