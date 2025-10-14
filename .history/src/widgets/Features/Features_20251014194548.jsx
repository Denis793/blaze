import classNames from 'classnames';
import { Button } from '@/shared/ui/Button';
import { featureBoxes, smallFeaturesList } from '@/data/featureData';
import ShapeImage from '@/assets/images/feature/shape.svg';
import FeatureImageOne from '@/assets/images/feature/feature-image-1.svg';
import FeatureImageTwo from '@/assets/images/feature/feature-image-2.svg';
import styles from './Features.module.scss';

export const Features = () => {
  return (
    <>
      <section id="features" className={styles.featureBoxesSection}>
        <div className="container">
          <div className={styles.sectionTitleWrapper}>
            <h2 className={styles.sectionTitle}>
              Modern design <span className={styles.desktopBr}>with Essential Features</span>
            </h2>
          </div>

          <div className={styles.featureBoxesGrid}>
            {featureBoxes.map((feature, index) => (
              <div key={index} className={styles.singleFeatureBox}>
                <div className={classNames(styles.featureIcon, styles[feature.color])}>
                  <i className={`lni ${feature.iconClass}`}></i>
                </div>
                <div className={styles.featureContent}>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="feature-one" className={styles.featureSectionOne}>
        <div className={styles.shapeImage}>
          <img src={ShapeImage} alt="Shape background" />
        </div>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureImage}>
              <img src={FeatureImageOne} alt="Feature Illustration 1" />
            </div>

            <div className={styles.featureContentWrapper}>
              <div className={styles.sectionTitle}>
                <h2 className={styles.title}>Perfect Solution Thriving Online Business</h2>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                </p>
                <Button href="#0" variant="border" className="btn-hover">
                  Discover More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature-two" className={styles.featureSectionTwo}>
        <div className={styles.shapeImageRight}>
          <img src={ShapeImage} alt="Shape background" />
        </div>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureContentWrapper}>
              <div className={styles.sectionTitle}>
                <h2 className={styles.title}>
                  Quick & Easy to <span className={styles.desktopBr}>Use Bootstrap Template</span>
                </h2>

                <div className={styles.featuresList}>
                  {smallFeaturesList.map((feature, index) => (
                    <div key={index} className={styles.singleFeatureListItem}>
                      <div className={classNames(styles.featureIconSmall, styles[feature.color])}>
                        <i className={`lni ${feature.iconClass}`}></i>
                      </div>
                      <div className={styles.featureContentSmall}>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.featureImage}>
              <img src={FeatureImageTwo} alt="Feature Illustration 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
