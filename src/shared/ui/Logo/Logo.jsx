import logo from '@/assets/images/logo/logo.svg';
import logodark from '@/assets/images/logo/logo-2.svg';
import styles from './Logo.module.scss';

export const Logo = ({ href, isScrolled, ...props }) => {
  const currentLogo = isScrolled ? logodark : logo;

  return (
    <a href={href} className={styles.logo} {...props}>
      <img src={currentLogo} alt="Blaze Logo" />
    </a>
  );
};
