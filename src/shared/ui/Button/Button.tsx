import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'
import classNames from 'classnames'

export enum ButtonTheme {
  CLEAR = 'clear',
  BACKGROUND = 'background',
}

type ButtonProps = {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const {
    className,
    children,
    theme = ButtonTheme.BACKGROUND,
    disabled,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.disabled]: !!disabled
  }

  return (
      <button
          className={classNames(cls.Button, mods, [className])}
          {...otherProps}
        >
          {children}
      </button>
  )
}

export default Button
