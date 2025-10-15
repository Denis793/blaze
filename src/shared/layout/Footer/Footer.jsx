import styles from './Footer.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { Button } from '@/shared/ui/Button';

const menuItems = [
  { href: '#0', label: 'Home' },
  { href: '#0', label: 'About' },
  { href: '#0', label: 'Service' },
  { href: '#0', label: 'Testimonial' },
  { href: '#0', label: 'Contact' },
];

const socialLinks = [
  { icon: 'lni-facebook-filled', href: '#0' },
  { icon: 'lni-linkedin-original', href: '#0' },
  { icon: 'lni-instagram-filled', href: '#0' },
  { icon: 'lni-twitter-filled', href: '#0' },
];

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
            <h4 className={styles.widgetTitle}>Features</h4>
            <ul className={styles.widgetLinks}>
              <li>
                <a href="#0">Creative Design</a>
              </li>
              <li>
                <a href="#0">Retina Ready</a>
              </li>
              <li>
                <a href="#0">Pug File Included</a>
              </li>
              <li>
                <a href="#0">Easy to Use</a>
              </li>
              <li>
                <a href="#0">Aweome Features</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerWidget}>
            <h4 className={styles.widgetTitle}>Support</h4>
            <ul className={styles.widgetLinks}>
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>
                <a href="#0">Terms of Use</a>
              </li>
              <li>
                <a href="#0">FAQ</a>
              </li>
              <li>
                <a href="#0">Support</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
            </ul>
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
              {menuItems.map((item) => (
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
