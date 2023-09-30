import { createSlice } from '@reduxjs/toolkit';
import { WordSchema } from '../types/wordSchema';
import { words } from '../const/words';

const initialState: WordSchema = {
    isLoading: false,
    error: undefined,
    data: words[0],
};

export const wordSlice = createSlice({
    name: 'word',
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

export const { actions: wordActions } = wordSlice;
export const { reducer: wordReducer } = wordSlice;
