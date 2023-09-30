import { IWord } from "./word";


export interface WordSchema {
    isLoading: boolean;
    error?: string;
    data?: IWord;
}
