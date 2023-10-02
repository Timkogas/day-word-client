import { WordsList, getLastWordsSelector, getLastWordsThunk } from 'entities/Word';
import type { FC } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import cls from './WordsPage.module.scss'
import { useAppDispatch } from 'app/providers/StoreProvider';

const WordsPage: FC = () => {
  const dispatch = useAppDispatch()

  const words = useSelector(getLastWordsSelector);
  console.log(words)
  useEffect(() => {
    dispatch(getLastWordsThunk())
  }, [dispatch])

  return (
    <div className={cls.WordsPage}>
      <WordsList words={words} />
    </div>
  )
}

export default WordsPage
