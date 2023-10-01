import { memo, type FC } from 'react'
import cls from './Navbar.module.scss'
import classNames from 'classnames'
import { AppLink } from 'shared/ui/AppLink'
import WordIcon from 'shared/assets/icons/words-32-32.svg?react'
import ProfileIcon from 'shared/assets/icons/profile-32-32.svg?react'
import { Icon } from 'shared/ui/Icon'
import { getRouteProfile, getRouteWords } from 'shared/const/router'
import IndicatorCircle from '../IndicatorCircle/IndicatorCircle'
import { useLocation } from 'react-router-dom'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(() => {
    const location = useLocation();

    return (
        <div className={classNames(cls.Navbar)}>
            <AppLink to={getRouteWords()} className={cls.link}>
                <Icon Svg={WordIcon} inverted />
            </AppLink>
            <AppLink to={getRouteProfile()} className={cls.link}>
                <Icon Svg={ProfileIcon} inverted />
            </AppLink>
            <IndicatorCircle className={classNames(location.pathname === getRouteWords() ? cls.activeWords : cls.activeProfile)} />
        </div>
    )
})

export default Navbar
