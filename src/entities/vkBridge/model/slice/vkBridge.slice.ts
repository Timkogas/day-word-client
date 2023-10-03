import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { VkBridgeSchema } from '../types/vkBridgeSchema';
import { allowNotificationsThunk, denyNotificationsThunk, getVkBridgeLaunchParamsThunk } from '../services/vkBridgeThunks';
import { GetLaunchParamsResponse } from '@vkontakte/vk-bridge';

const initialState: VkBridgeSchema = {
    notificationsIsAllowed: false,
};

export const vkBridgeSlice = createSlice({
    name: 'vkBridge',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                getVkBridgeLaunchParamsThunk.fulfilled,
                (state, { payload }: PayloadAction<GetLaunchParamsResponse | undefined>) => {
                    if (payload !== undefined) {
                        state.launchParams = payload
                        state.notificationsIsAllowed = payload.vk_are_notifications_enabled === 1
                    }
                },
            )
            .addCase(
                allowNotificationsThunk.fulfilled,
                (state, { payload }: PayloadAction<boolean | undefined>) => {
                    if (payload !== undefined) {
                        state.notificationsIsAllowed = payload
                    }
                },
            )
            .addCase(
                denyNotificationsThunk.fulfilled,
                (state, { payload }: PayloadAction<boolean | undefined>) => {
                    if (payload !== undefined) {
                        state.notificationsIsAllowed = !payload
                    }
                },
            )
    },
});

// Action creators are generated for each case reducer function
export const { actions: vkBridgeActions } = vkBridgeSlice;
export const { reducer: vkBridgeReducer } = vkBridgeSlice;
