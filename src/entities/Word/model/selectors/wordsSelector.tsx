import { AppState } from "app/providers/StoreProvider";

export const getWordsSelector = (state: AppState) =>
    state.words?.words || false;