import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { userApi } from '../../api/userApi';

export const checkUserThunk = createAppAsyncThunk(`checkUserThunk`, async (uid: number) => {
    return await userApi.check(uid)
})

export const getVkUserThunk = createAppAsyncThunk(`getVkUser`, async (uid: number) => {
    return await userApi.getVkUser(uid)
})
  
  