import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';
import { checkUserThunk, getVkUserThunk } from '../services/userThunks';
import ResponseApi from 'shared/types/api';
import { IUser } from '../types/user';
import { UserInfo } from '@vkontakte/vk-bridge';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                checkUserThunk.fulfilled,
                (state, { payload }: PayloadAction<ResponseApi<IUser> | undefined>) => {
                    if (payload !== undefined) {
                        state.user = payload.result
                    }
                },
            )
            .addCase(
                getVkUserThunk.fulfilled,
                (state, { payload }: PayloadAction<UserInfo | undefined>) => {
                    if (payload !== undefined) {
                        state.vkUser = payload
                    }
                },
            )
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
