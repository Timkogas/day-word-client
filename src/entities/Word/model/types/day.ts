import { IWord } from "./word"

export interface IDay {
    day: string;
    id: number;
    word: IWord;
    word_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface IRequestAddWordToFavorite {
    uid: number;
    word_id: number;
}