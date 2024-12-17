import styles from './button.module.scss';
import clsx from 'clsx';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  children,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button__${variant}`], // Модификатор
      )}
    >
      {icon && <span className={styles.button__icon}>{icon}</span>}{' '}
      {/* Элемент */}
      {children}
    </button>
  );
};

export default Button;
