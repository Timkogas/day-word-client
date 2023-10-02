import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WordSchema } from '../types/wordSchema';
import { getLastWordsThunk } from '../services/wordsThunks';
import ResponseApi from 'shared/types/api';


const initialState: WordSchema = {
    isLoading: false,
    error: undefined,
    words: [],
};

export const wordSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getLastWordsThunk.fulfilled,
            (state, { payload }: PayloadAction<ResponseApi | undefined>) => {
                if (payload !== undefined) {
                    state.words = payload.result
                }
            },
        );
    },
});

export const { actions: wordActions } = wordSlice;
export const { reducer: wordReducer } = wordSlice;
