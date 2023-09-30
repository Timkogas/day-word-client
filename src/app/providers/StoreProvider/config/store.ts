import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { wordReducer } from "entities/Word/model/slice/word.slice"
import { wordsReducer } from "entities/Word/model/slice/words.slice"
import { useDispatch } from 'react-redux'

const makeStore = () => {
    return configureStore({
        reducer: {
            word: wordReducer,
            words: wordsReducer
        }
    })
}

const store = makeStore()
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store