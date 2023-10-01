import { memo, type FC } from 'react'
import cls from './Header.module.scss'
import classNames from 'classnames'
import { Text, TextSize } from 'shared/ui/Text'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = memo(() => {

  return (
      <div className={classNames(cls.Header)}>
            <Text title='Слово дня' size={TextSize.L}/>
      </div>
  )
})

export default Header
