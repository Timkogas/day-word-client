import { createAppAsyncThunk } from 'app/providers/StoreProvider';
import { userApi } from '../../api/userApi';

export const checkUserThunk = createAppAsyncThunk(`getLaunchParams`, async (uid: number) => {
    return await userApi.check(uid)
})
  