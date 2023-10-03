import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { VkBridgeSchema } from '../types/vkBridgeSchema';
import { getVkBridgeLaunchParamsThunk } from '../services/vkBridgeThunks';
import { GetLaunchParamsResponse } from '@vkontakte/vk-bridge';

const initialState: VkBridgeSchema = {};

export const vkBridgeSlice = createSlice({
    name: 'vkBridge',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getVkBridgeLaunchParamsThunk.fulfilled,
            (state, { payload }: PayloadAction<GetLaunchParamsResponse | undefined>) => {
                if (payload !== undefined) {
                    state.launchParams = payload
                }
            },
        );
    },
});

// Action creators are generated for each case reducer function
export const { actions: vkBridgeActions } = vkBridgeSlice;
export const { reducer: vkBridgeReducer } = vkBridgeSlice;
