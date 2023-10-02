import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { vkBridgeApi } from '../../api/vkBridgeApi';

export const getVkBridgeLaunchParamsThunk = createAppAsyncThunk(`getLaunchParams`, async () => {
    return await vkBridgeApi.getLaunchParams()
})
  