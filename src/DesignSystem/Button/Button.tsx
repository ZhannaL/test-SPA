import { ReactNode } from 'react';
import styles from './button.module.scss';

export type Size = 'small' | 'medium';

type Props = {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: Size;
  onClick?: () => unknown;
};

const sizes = {
  small: styles.small,
  medium: styles.medium,
};

const variants = {
  contained: styles.contained,
  outlined: styles.outlined,
  text: styles.text,
};

export const Button = ({
  children,
  variant = 'contained',
  size = 'medium',
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.button} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </button>
  );
};
