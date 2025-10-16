import styles from './Footer.module.scss';
import { Logo } from '@/shared/ui/Logo';
import { Button } from '@/shared/ui/Button';
import { footerItems, socialLinks } from '@/shared/config/menuConfig';
import { isValidEmail } from '@/shared/utils/validators';
import { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('invalid');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('ok');
      setEmail('');
    }, 700);
  };

  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.brand}>
            <Logo href="#home" />
            <p className={styles.description}>
              Blaze — modern landing UI kit. Built with attention to performance and accessibility.
            </p>
            <div className={styles.social} aria-label="social links">
              {socialLinks.map((s) => (
                <a key={s.icon} href={s.href} className={styles.socialItem} aria-label={s.icon}>
                  <i className={`lni ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.links} aria-label="primary">
            <h4 className={styles.sectionTitle}>Explore</h4>
            <ul>
              {footerItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.links} aria-label="resources">
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul>
              <li>
                <a href="#0">Documentation</a>
              </li>
              <li>
                <a href="#0">Changelog</a>
              </li>
              <li>
                <a href="#0">Support</a>
              </li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.sectionTitle}>Stay up to date</h4>
            <p className={styles.description}>Subscribe to our newsletter to get the latest updates.</p>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label htmlFor="footer-email" className={styles.visuallyHidden}>
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={styles.input}
                required
              />
              <Button type="submit" variant="primary" className={styles.cta}>
                Subscribe
              </Button>
            </form>
            {status === 'invalid' && <p className="error">Please enter a valid email.</p>}
            {status === 'ok' && <p className="success">Thanks for subscribing!</p>}
          </div>
        </div>

        <div className={styles.footerMeta}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Blaze. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#0">Privacy</a>
            <a href="#0">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
