import bridge, { GetLaunchParamsResponse } from "@vkontakte/vk-bridge";

class VkBridgeApi {
    public getLaunchParams = async (): Promise<GetLaunchParamsResponse | undefined> => {
        try {
            const response = await bridge.send('VKWebAppGetLaunchParams')
            if (response?.vk_app_id) {
                return response
            }
        } catch (error){
            console.log(error);
        }
    }

    public denyNotifications = async (): Promise<boolean | undefined> => {
        try {
            const response = await bridge.send('VKWebAppDenyNotifications')
            if (response) {
                return response.result
            }
        } catch (error){
            console.log(error);
        }
    }

    public allowNotifications = async (): Promise<boolean | undefined> => {
        try {
            const response = await bridge.send('VKWebAppAllowNotifications')
            if (response) {
                return response.result
            }
        } catch (error){
            console.log(error);
        }
    }
}

export const vkBridgeApi = new VkBridgeApi()