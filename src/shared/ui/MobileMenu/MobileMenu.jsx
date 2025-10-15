import clsx from 'clsx';
import { NavLink } from '@/shared/ui/NavLink';
import { Button } from '@/shared/ui/Button';
import { headerItems } from '@/shared/config/menuConfig';
import styles from './MobileMenu.module.scss';

export const MobileMenu = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <>
      <button
        className={clsx(styles.toggler, isMenuOpen && styles.open)}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={styles.togglerIcon}></span>
        <span className={styles.togglerIcon}></span>
        <span className={styles.togglerIcon}></span>
      </button>

      <div className={clsx(styles.menuBar, isMenuOpen && styles.open)}>
        <ul className={styles.navbarNav}>
          {headerItems.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <NavLink href={item.href} isActive={item.isActive} onClick={closeMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.headerBtnMobile}>
          <Button href="#0" variant="primary" onClick={closeMenu}>
            Download
          </Button>
        </div>
      </div>
    </>
  );
};
