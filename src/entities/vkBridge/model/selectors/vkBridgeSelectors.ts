import { AppState } from "app/providers/StoreProvider";

export const getVkBridgeLaunchParamsSelector = (state: AppState) =>
    state.vkBridge?.launchParams;

export const getVkBridgeNotificationsIsAllowedSelector = (state: AppState) =>
    state.vkBridge?.notificationsIsAllowed;