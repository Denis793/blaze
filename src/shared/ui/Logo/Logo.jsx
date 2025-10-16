import logo from '@/assets/images/logo/logo.svg';
import logoDark from '@/assets/images/logo/logo-2.svg';

export const Logo = ({ href, isScrolled, ...props }) => {
  const currentLogo = isScrolled ? logoDark : logo;

  return (
    <a href={href} {...props}>
      <img src={currentLogo} alt="Blaze Logo" />
    </a>
  );
};
