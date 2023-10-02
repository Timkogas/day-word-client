import { getWordsSelector } from "./model/selectors/wordsSelectors";
import { wordReducer } from "./model/slice/word.slice";
import { wordsReducer } from "./model/slice/words.slice";
import { WordSchema } from "./model/types/wordSchema";
import { WordsList } from "./ui/WordsList/WordsList";

export type { WordSchema }

export { WordsList, getWordsSelector, wordsReducer, wordReducer }