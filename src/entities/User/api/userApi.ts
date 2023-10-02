import { instance } from "shared/api/api"
import ResponseApi from "shared/types/api"


class UserApi {
    public check = async (uid: number): Promise<ResponseApi | undefined> => {
        try {
            const response = await instance.post(`users`, { uid: uid.toString() })
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const userApi = new UserApi()