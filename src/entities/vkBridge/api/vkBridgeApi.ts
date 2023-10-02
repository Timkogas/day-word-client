import bridge, { GetLaunchParamsResponse } from "@vkontakte/vk-bridge";

class VkBridgeApi {
    public getLaunchParams = async (): Promise<GetLaunchParamsResponse | undefined> => {
        try {
            const response = await bridge.send('VKWebAppGetLaunchParams')
            if (response.vk_app_id) {
                return response
            }
        } catch (error){
            console.log(error);
        }
    }
}

export const vkBridgeApi = new VkBridgeApi()