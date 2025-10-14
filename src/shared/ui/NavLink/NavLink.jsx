import classNames from 'classnames';
import styles from './NavLink.module.scss';

export const NavLink = ({ children, href, isActive, className, ...props }) => {
  const linkClasses = classNames(styles.navLink, className, {
    [styles.active]: isActive,
  });

  return (
    <a href={href} className={linkClasses} {...props}>
      {children}
    </a>
  );
};
