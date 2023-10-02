import { AppState } from "app/providers/StoreProvider";

export const getVkBridgeLaunchParamsSelector = (state: AppState) =>
    state.vkBridge?.launchParams;