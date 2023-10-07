import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { wordApi } from 'entities/Word/api/wordApi';


export const getLastWordsThunk = createAppAsyncThunk(`getLastWords`, async () => {
    return await wordApi.getLastWords()
})

export const addWordToFavoriteThunk = createAppAsyncThunk(`addWordToFavorite`, async (word_id: number) => {
    return await wordApi.addWordToFavorite(word_id)
})
