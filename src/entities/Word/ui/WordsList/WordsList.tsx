import { memo, type FC } from 'react'
import cls from './WordsList.module.scss'
import classNames from 'classnames'
import { IWord } from '../../model/types/word'
import WordItem from '../WordItem/WordItem'

interface WordsListProps {
    className?: string
    words: IWord[]
}

export const WordsList: FC<WordsListProps> = memo((props: WordsListProps) => {
    const { words, className } = props
    return (
        <div className={classNames(cls.WordsList, className)}>
            {words.map((word) => {
                return (
                    <WordItem
                        word={word}
                        key={word.id}
                    />
                )
            })}
        </div>
    )
})

export default WordsList
