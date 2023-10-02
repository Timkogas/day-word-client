import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';
import { checkUserThunk } from '../services/userThunks';
import ResponseApi from 'shared/types/api';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            checkUserThunk.fulfilled,
            (state, { payload }: PayloadAction<ResponseApi | undefined>) => {
                if (payload !== undefined) {
                    state.data = payload.result
                }
            },
        );
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
