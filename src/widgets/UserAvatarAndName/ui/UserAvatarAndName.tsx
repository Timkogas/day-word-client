import { memo, type FC } from 'react'
import cls from './UserAvatarAndName.module.scss'
import { Text, TextSize } from 'shared/ui/Text'
import { AppImage } from 'shared/ui/AppImage'
import classNames from 'classnames'

interface UserAvatarAndNameProps {
    className?: string;
    img: string;
    name: string;
}

export const UserAvatarAndName: FC<UserAvatarAndNameProps> = memo((props: UserAvatarAndNameProps) => {
    const { img, name, className } = props


    return (
        <div className={classNames(className)}>
            <AppImage src={img} alt='avatar' className={classNames(cls.avatar)}/>
            <Text title={name} size={TextSize.L} />
        </div>
    )
})

export default UserAvatarAndName
