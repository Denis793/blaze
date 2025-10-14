import styles from './Newsletter.module.scss';
import { Button } from '@/shared/ui/Button';

export const Newsletter = () => {
  return (
    <section id="newsletter" className={styles.newsletterSection}>
      <div className="container">
        <div className={styles.newsletterInner}>
          <div className={styles.contentWrapper}>
            <h2>
              Subscribe to Receive <span className={styles.desktopBr}>Future Updates!</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className={styles.formWrapper}>
            <form action="#" method="POST" className={styles.newsletterForm}>
              <input type="email" placeholder="Your Email" required />
              <Button type="submit" variant="primary" className={styles.submitBtn}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
