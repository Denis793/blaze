import { useState } from 'react';
import { Logo } from '@/shared/ui/Logo';
import { Button } from '@/shared/ui/Button';
import { NavLink } from '@/shared/ui/NavLink';
import { navItems } from '@/shared/config/headerConfig';
import { useHeaderScroll } from '@/shared/hooks/useHeaderScroll';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrolled, scrollDirection } = useHeaderScroll(80);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClasses = [
    styles.header,
    scrolled ? styles.headerScrolled : '',
    scrolled && scrollDirection === 'down' ? styles.hidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      <div className={`${styles.navbarArea} ${scrolled ? styles.navbarAreaScrolled : ''}`}>
        <div className="container">
          <nav className={styles.navbar}>
            <Logo href="#home" isScrolled={scrolled} />

            <button className={styles.toggler} onClick={toggleMenu} aria-label="Toggle navigation">
              <span className={styles.togglerIcon}></span>
              <span className={styles.togglerIcon}></span>
              <span className={styles.togglerIcon}></span>
            </button>

            <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}>
              <ul className={styles.navbarNav}>
                {navItems.map((item) => (
                  <li key={item.label} className={styles.navItem}>
                    <NavLink href={item.href} isActive={item.isActive} onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.headerBtn}>
              <Button href="#0" variant="primary" className={styles.headerButton}>
                Download
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
