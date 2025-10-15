import styles from './Footer.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { Button } from '@/shared/ui/Button';
import { footerItems, socialLinks } from '@/shared/config/menuConfig';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerWidget}>
            <div className={styles.footerLogo}>
              <Logo href="#0" />
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste
              ipsum officiis deleniti asperiores sit.
            </p>
          </div>

          <div className={styles.footerWidget}>
            <h4 className={styles.widgetTitle}>Newsletter</h4>
            <div className={styles.newsletterFormWrapper}>
              <form action="#" method="POST" className={styles.newsletterForm}>
                <input type="email" placeholder="Email address" required />
                <Button type="submit" variant="primary" className={styles.submitBtn}>
                  <i className="lni lni-chevron-right"></i>
                </Button>
              </form>
            </div>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerMenu}>
            <ul>
              {footerItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.icon}>
                  <a href={link.href}>
                    <i className={`lni ${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a href="#top" className={styles.scrollTop}>
        <i className="lni lni-chevron-up"></i>
      </a>
    </footer>
  );
};
