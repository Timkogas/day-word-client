import type { FC } from 'react'
import Button from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'
import classNames from 'classnames'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = () => {

  const reloadPage = () => {
    location.reload()
  }

  return (
      <div className={classNames(cls.PageError)}>
          <p>Произошла непредвиденная ошибка</p>
          <Button onClick={reloadPage} className={classNames(cls.btn)}>
              Обновить страницу
          </Button>
      </div>
  )
}

export default PageError
