import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';
import classNames from 'classnames';


interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, className)}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
