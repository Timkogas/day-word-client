import { FC, memo } from 'react';
import cls from './IndicatorCircle.module.scss'
import classNames from 'classnames';

interface IndicatorCircleProps {
    className?: string
}

const IndicatorCircle: FC<IndicatorCircleProps> = memo(({ className }: IndicatorCircleProps) => {
    return <div className={classNames(cls.IndicatorCircle, className)}></div>;
});

export default IndicatorCircle;