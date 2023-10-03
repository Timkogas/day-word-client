import type { FC } from 'react'
import { memo } from 'react'
import styles from './Switch.module.scss'
import classNames from 'classnames';
import { Icon } from '../Icon';
import SuccessIcon from 'shared/assets/icons/success-32-32.svg?react'
import ErrorIcon from 'shared/assets/icons/error-32-32.svg?react'

type SwitchProps = {
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}


export const Switch: FC<SwitchProps> = memo((props) => {

  const {
    checked,
    onChange,
    className
  } = props

  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className={classNames(styles.switch, className)}>
      <Icon Svg={SuccessIcon} className={styles.success}/>
      <Icon Svg={ErrorIcon} className={styles.error}/>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.slider}></span>
    </label>
  );
});