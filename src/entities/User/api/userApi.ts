import { instance } from "shared/api/api"
import ResponseApi from "shared/types/api"
import { IUser } from "../model/types/user"
import bridge, { UserInfo } from "@vkontakte/vk-bridge"


class UserApi {
    public check = async (uid: number): Promise<ResponseApi<IUser> | undefined> => {
        try {
            const response = await instance.post(`users`, { uid: uid.toString() })
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    public getVkUser = async (uid: number): Promise<UserInfo | undefined> => {
        try {
            const response = await bridge.send('VKWebAppGetUserInfo', {
                user_id: uid
            })
            
            if (response?.id) {
                return response
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const userApi = new UserApi()