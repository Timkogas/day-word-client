import { instance } from "shared/api/api"
import ResponseApi from "shared/types/api"


class WordApi {
    public getLastWords = async (): Promise<ResponseApi | undefined> => {
        try {
            const response = await instance.get(`days?limit=20&offset=0`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const wordApi = new WordApi()