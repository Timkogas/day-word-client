import { UserInfo } from "@vkontakte/vk-bridge";
import { IUser } from "./user";

export interface UserSchema {
    user?: IUser
    vkUser?: UserInfo
}
