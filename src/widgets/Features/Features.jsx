import clsx from 'clsx';
import classNames from 'classnames';
import { Button } from '@/shared/ui/Button';
import { features } from '@/shared/data/featuresData';
import FeatureImageOne from '@/assets/images/feature/feature-image-1.svg';
import FeatureImageTwo from '@/assets/images/feature/feature-image-2.svg';
import styles from './Features.module.scss';

const BASE_INDENT_REM = 2;

export const Features = () => {
  return (
    <>
      <section id="features" className={styles.featureWrapper}>
        <div className="container">
          <div id="feature-one" className={styles.featureSection}>
            <div className={styles.featureGrid}>
              <div className={clsx(styles.featureImageOne, styles.featureImage)}>
                <img src={FeatureImageOne} alt="Feature Illustration 1" />
              </div>

              <div className={styles.featureContentWrapper}>
                <div className={styles.sectionTitle}>
                  <h2 className={styles.title}>Perfect Solution Thriving Online Business</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit
                    amet.
                  </p>

                  <Button href="#0" variant="border">
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <section id="feature-two" className={styles.featureSection}>
            <div className={styles.featureGrid}>
              <div className={styles.featureContentWrapper}>
                <div className={styles.sectionTitle}>
                  <h2 className={styles.title}>
                    Quick & Easy to Use Bootstrap <br />
                    Template
                  </h2>

                  <div className={styles.featuresList}>
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={styles.singleFeatureListItem}
                        style={{ ['--indent']: `${index * 2 * BASE_INDENT_REM}rem` }}
                      >
                        <div className={classNames(styles.featureIconSmall, feature.color)}>
                          <i className={`lni ${feature.iconClass}`}></i>
                        </div>
                        <div className={styles.featureContentSmall}>
                          <h4>{feature.title}</h4>
                          <p className="description">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={clsx(styles.featureImageTwo, styles.featureImage)}>
                <img src={FeatureImageTwo} alt="Feature Illustration 2" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
