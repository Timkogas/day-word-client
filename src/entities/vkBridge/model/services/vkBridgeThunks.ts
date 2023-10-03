import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { vkBridgeApi } from '../../api/vkBridgeApi';

export const getVkBridgeLaunchParamsThunk = createAppAsyncThunk(`getLaunchParams`, async () => {
    return await vkBridgeApi.getLaunchParams()
})

export const denyNotificationsThunk = createAppAsyncThunk(`denyNotifications`, async () => {
    return await vkBridgeApi.denyNotifications()
})

export const allowNotificationsThunk = createAppAsyncThunk(`allowNotifications`, async () => {
    return await vkBridgeApi.allowNotifications()
})
  
  