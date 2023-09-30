import { getWordsSelector } from 'entities/Word';
import WordsList from 'entities/Word/ui/WordsList/WordsList'
import type { FC } from 'react'
import { useSelector } from 'react-redux';
import cls from './WordsPage.module.scss'

const WordsPage: FC = () => {
  const words = useSelector(getWordsSelector);
  return (
      <div className={cls.WordsPage}>
          <WordsList words={words}/>
      </div>
  )
}

export default WordsPage
