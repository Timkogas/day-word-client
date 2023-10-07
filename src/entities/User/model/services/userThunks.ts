import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { userApi } from '../../api/userApi';

export const checkUserThunk = createAppAsyncThunk(`checkUserThunk`, async () => {
    return await userApi.check()
})

export const getVkUserThunk = createAppAsyncThunk(`getVkUser`, async (uid: number) => {
    return await userApi.getVkUser(uid)
})
  
  