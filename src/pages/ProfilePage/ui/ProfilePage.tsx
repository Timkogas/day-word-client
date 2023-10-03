import { useAppDispatch } from 'app/providers/StoreProvider';
import { getVkUserSelector, getVkUserThunk } from 'entities/User';
import { getVkBridgeLaunchParamsSelector } from 'entities/vkBridge';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserAvatarAndName } from 'widgets/UserAvatarAndName';
import cls from './ProfilePage.module.scss'
import { AllowPushesSwitch } from 'features/AllowPushesSwitch';
import { Text, TextSize } from 'shared/ui/Text';

const ProfilePage: FC = () => {

    const dispatch = useAppDispatch()

    const launchParams = useSelector(getVkBridgeLaunchParamsSelector)
    const vkUser = useSelector(getVkUserSelector)

    console.log(vkUser)

    useEffect(() => {
        if (launchParams?.vk_user_id) {
            dispatch(getVkUserThunk(launchParams?.vk_user_id))
        }
    }, [dispatch, launchParams?.vk_user_id])

    return (
        <div>
            {vkUser ?
                <div className={cls.content}>
                    <UserAvatarAndName
                        className={cls.UserAvatarAndName}
                        img={vkUser?.photo_200}
                        name={vkUser?.first_name + ' ' + vkUser?.last_name}
                    />
                    <div className={cls.item}>
                        <Text title={"Уведомления:"} size={TextSize.M} /><AllowPushesSwitch />
                    </div>
                </div>
                : null}
        </div>
    )
}

export default ProfilePage
