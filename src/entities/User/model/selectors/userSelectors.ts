import { AppState } from "app/providers/StoreProvider";

export const getUserSelector = (state: AppState) =>
    state.user?.user;

export const getVkUserSelector = (state: AppState) =>
    state.user?.vkUser;