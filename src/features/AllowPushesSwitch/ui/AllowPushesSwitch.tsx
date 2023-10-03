import { memo, type FC, useCallback } from 'react'
import cls from './AllowPushesSwitch.module.scss'
import { Switch } from 'shared/ui/Switch'
import { useSelector } from 'react-redux'
import { allowNotificationsThunk, denyNotificationsThunk, getVkBridgeNotificationsIsAllowedSelector } from 'entities/vkBridge'
import { useAppDispatch } from 'app/providers/StoreProvider'

interface AllowPushesSwitchProps {
    className?: string
}

export const AllowPushesSwitch: FC<AllowPushesSwitchProps> = memo(() => {
    const notificationsIsAllowed = useSelector(getVkBridgeNotificationsIsAllowedSelector)
    const dispatch = useAppDispatch()

    const onChange = useCallback(() => {
        notificationsIsAllowed ? dispatch(denyNotificationsThunk()) : dispatch(allowNotificationsThunk())
    }, [dispatch, notificationsIsAllowed])

    return (
        <Switch checked={notificationsIsAllowed} onChange={onChange} />
    )
})

export default AllowPushesSwitch
