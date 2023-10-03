import { getLastWordsSelector } from "./model/selectors/wordSelectors";
import { addWordToFavoriteThunk, getLastWordsThunk } from "./model/services/wordsThunks";
import { wordReducer } from "./model/slice/word.slice";
import { WordSchema } from "./model/types/wordSchema";
import { WordsList } from "./ui/WordsList/WordsList";

export type { WordSchema }
export {
    WordsList,
    getLastWordsSelector,
    wordReducer,
    getLastWordsThunk,
    addWordToFavoriteThunk
}