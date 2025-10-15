import { useState } from 'react';
import clsx from 'clsx';
import { Logo } from '@/shared/ui/Logo';
import { Button } from '@/shared/ui/Button';
import { NavLink } from '@/shared/ui/NavLink';
import { headerItems } from '@/shared/config/menuConfig';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';
import { useHeaderScroll } from '@/shared/hooks/useHeaderScroll';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrolled, scrollDirection } = useHeaderScroll(80);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClasses = clsx(
    styles.header,
    scrolled && styles.headerScrolled,
    scrolled && scrollDirection === 'down' && styles.hidden
  );

  return (
    <header className={headerClasses}>
      <div className={clsx(styles.navbarArea, scrolled && styles.navbarAreaScrolled)}>
        <div className="container">
          <nav className={styles.navbar}>
            <Logo href="#home" isScrolled={scrolled} />

            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

            <div className={styles.menuBarDesktop}>
              <ul className={styles.navbarNavDesktop}>
                {headerItems.map((item) => (
                  <li key={item.label} className={styles.navItemDesktop}>
                    <NavLink href={item.href} isActive={item.isActive}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className={styles.headerBtnDesktop}>
                <Button href="#" variant="primary" className={styles.headerButton}>
                  Download
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
