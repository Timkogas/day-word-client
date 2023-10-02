import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { wordApi } from 'entities/Word/api/wordApi';


export const getLastWordsThunk = createAppAsyncThunk(`getLastWords`, async () => {
    return await wordApi.getLastWords()
})
  