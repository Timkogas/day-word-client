import { IWord } from "./word";

export interface WordsSchema {
    isLoading: boolean;
    error?: string;
    words: IWord[]
}