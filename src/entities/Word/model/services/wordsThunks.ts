import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { wordApi } from 'entities/Word/api/wordApi';
import { IRequestAddWordToFavorite } from '../types/day';


export const getLastWordsThunk = createAppAsyncThunk(`getLastWords`, async () => {
    return await wordApi.getLastWords()
})

export const addWordToFavoriteThunk = createAppAsyncThunk(`addWordToFavorite`, async ({ uid, word_id }: IRequestAddWordToFavorite) => {
    return await wordApi.addWordToFavorite({uid, word_id})
})
  