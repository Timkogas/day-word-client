import { IDay } from "./day";

export interface WordSchema {
    isLoading: boolean;
    error?: string;
    days: IDay[];
}