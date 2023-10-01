import { memo, type FC } from 'react'
import cls from './WordItem.module.scss'
import { Text, TextSize } from 'shared/ui/Text'
import { IWord } from '../../model/types/word'

interface WordItemProps {
    className?: string
    word: IWord
}

export const WordItem: FC<WordItemProps> = memo((props: WordItemProps) => {
    const { word } = props


    return (
        <div className={cls.WordItem}>
            <Text title={word.word} size={TextSize.L} />
            <Text text={word.type} size={TextSize.M} />
            <Text title={word.description} size={TextSize.M} className={cls.description} />
            <Text text={word.example} size={TextSize.M} />
        </div>
    )
})

export default WordItem
