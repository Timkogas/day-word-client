import { AppState } from "app/providers/StoreProvider";

export const getLastWordsSelector = (state: AppState) => state.word?.days;