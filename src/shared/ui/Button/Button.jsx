import styles from './Button.module.scss';
import classNames from 'classnames';

export const Button = ({ children, variant = 'primary', href, className, ...props }) => {
  const buttonClasses = classNames(styles.button, className, {
    [styles.primary]: variant === 'primary',
    [styles.border]: variant === 'border',
    [styles.hover]: variant === 'hover',
  });

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
