import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { userReducer } from "entities/User"
import { wordReducer } from "entities/Word"
import { wordsReducer } from "entities/Word"
import { vkBridgeReducer } from "entities/vkBridge"
import { useDispatch } from 'react-redux'

const makeStore = () => {
    return configureStore({
        reducer: {
            word: wordReducer,
            words: wordsReducer,
            vkBridge: vkBridgeReducer,
            user: userReducer
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