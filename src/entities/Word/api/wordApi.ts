import { instance } from "shared/api/api"
import ResponseApi from "shared/types/api"
import { IDay, IRequestAddWordToFavorite } from "../model/types/day"

class WordApi {
    public getLastWords = async (): Promise<ResponseApi<IDay[]> | undefined> => {
        try {
            const response = await instance.get(`days?limit=20&offset=0`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    public addWordToFavorite = async ({ uid, word_id }: IRequestAddWordToFavorite): Promise<ResponseApi<IDay[]> | undefined> => {
        try {
            const response = await instance.post(`favorites`, {
                uid: uid.toString(),
                word_id: word_id
            })
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const wordApi = new WordApi()