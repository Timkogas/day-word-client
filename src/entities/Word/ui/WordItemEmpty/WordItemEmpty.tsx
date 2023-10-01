import { memo, type FC } from 'react'
import cls from './WordItemEmpty.module.scss'

interface WordItemEmptyProps {
    className?: string
}

export const WordItemEmpty: FC<WordItemEmptyProps> = memo(() => {
    return (
        <div className={cls.empty}></div>
    )
})

export default WordItemEmpty
