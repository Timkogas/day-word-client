export interface IWord {
    id: number;
    word: string;
    description: string;
    example: string;
    type: ETypeWord;
}

export enum ETypeWord {
    NOUN = "существительное",
    ADJECTIVE = "прилагательное",
    VERB = "глагол",
    ADVERB = "наречие",
}