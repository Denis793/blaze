import logo from '@/assets/images/logo/logo.svg';
import styles from './Logo.module.scss';

export const Logo = ({ href, ...props }) => {
  return (
    <a href={href} className={styles.logo} {...props}>
      <img src={logo} alt="Blaze Logo" />
    </a>
  );
};
