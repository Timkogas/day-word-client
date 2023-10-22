import { IWord } from "./word"

export interface IDay {
    day: Date;
    id: number;
    word: IWord;
    word_id: number;
    created_at: Date;
    updated_at: Date;
}