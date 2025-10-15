import { Button } from '@/shared/ui/Button';
import heroImg from '@/assets/images/hero/hero-image.svg';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section id="home" className={styles.heroWrapper}>
      <div className="container">
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>
              You are using free lite version of <span>Blaze</span>
            </h1>
            <p className="description">
              Please, purchase full version of the template to get all sections, elements and permission to remove
              footer credits.
            </p>

            <Button href="#" variant="primary" className="btn-hover">
              Buy Now
            </Button>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImg} alt="Hero Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};
