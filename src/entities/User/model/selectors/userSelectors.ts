import { AppState } from "app/providers/StoreProvider";

export const getUserSelector = (state: AppState) =>
    state.user?.user;