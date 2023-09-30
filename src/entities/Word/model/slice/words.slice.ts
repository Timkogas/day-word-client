import { createSlice } from '@reduxjs/toolkit';
import { WordsSchema } from '../types/wordsSchema';
import { words } from '../const/words';

const initialState: WordsSchema = {
    isLoading: false,
    error: undefined,
    words: words,
};

export const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {},
    extraReducers: () => {
        // builder
        //     .addCase(fetchArticleById.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(
        //         fetchArticleById.fulfilled,
        //         (state, action: PayloadAction<Article>) => {
        //             state.isLoading = false;
        //             state.data = action.payload;
        //         },
        //     )
        //     .addCase(fetchArticleById.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

export const { actions: wordsActions } = wordsSlice;
export const { reducer: wordsReducer } = wordsSlice;
