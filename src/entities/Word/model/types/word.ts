export interface IWord {
    id: number;
    word: string;
    description: string;
    example: string;
    type: ETypeWord;
    created_at: Date;
    updated_at: Date;
}

export enum ETypeWord {
    NOUN = "существительное",
    ADJECTIVE = "прилагательное",
    VERB = "глагол",
    ADVERB = "наречие",
}