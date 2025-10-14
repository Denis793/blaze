import { useState } from 'react';
import { Logo } from '@/shared/ui/Logo';
import { Button } from '@/shared/ui/Button';
import { NavLink } from '@/shared/ui/NavLink';
import styles from './Header.module.scss';

const navItems = [
  { href: '#home', label: 'Home', isActive: true },
  { href: '#features', label: 'Features' },
  { href: '#0', label: 'Team' },
  { href: '#0', label: 'Testimonial' },
  { href: '#0', label: 'Pricing' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbarArea}>
        <div className="container">
          <nav className={styles.navbar}>
            <Logo href="index.html" />

            <button className={styles.toggler} onClick={toggleMenu} aria-label="Toggle navigation">
              <span className={styles.togglerIcon}></span>
              <span className={styles.togglerIcon}></span>
              <span className={styles.togglerIcon}></span>
            </button>

            <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}>
              <ul className={styles.navbarNav}>
                {navItems.map((item) => (
                  <li key={item.label} className={styles.navItem}>
                    <NavLink href={item.href} isActive={item.isActive}>
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
