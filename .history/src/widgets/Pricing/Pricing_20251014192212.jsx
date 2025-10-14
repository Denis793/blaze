import { useState } from 'react';
import classNames from 'classnames';
import styles from './Pricing.module.scss';
import { Button } from '@/shared/ui/Button';
import { pricingPlans } from '@/data/pricingData';

// Допоміжний компонент для однієї картки
const SinglePricingBox = ({ plan, isMonthly }) => {
  const price = isMonthly ? plan.priceMonthly : plan.priceAnnually;
  const duration = isMonthly ? '/ month' : '/ year';
  const priceDisplay = price.toFixed(2);

  const boxClasses = classNames(styles.singlePricingBox, {
    [styles.featured]: plan.featured,
  });

  return (
    <div className={boxClasses}>
      {plan.featured && <span className={styles.featuredTag}>Popular</span>}
      <div className={styles.pricingHeader}>
        <h4 className={styles.pricingType}>{plan.type}</h4>
        <p className={styles.pricingPrice}>
          <span className={styles.currency}>$</span>
          <span className={styles.price}>{priceDisplay}</span>
          <span className={styles.duration}>{duration}</span>
        </p>
      </div>
      <div className={styles.pricingBody}>
        <ul className={styles.pricingFeatures}>
          {plan.features.map((feature, index) => (
            <li key={index} className={classNames({ [styles.notIncluded]: !feature.included })}>
              <i className={`lni ${feature.included ? 'lni-checkmark-circle' : 'lni-cross-circle'}`}></i>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pricingFooter}>
        <Button href="#0" variant={plan.featured ? 'primary' : 'border'} className="btn-hover">
          {plan.buttonText}
        </Button>
      </div>
    </div>
  );
};

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>
            Simple and <span className={styles.desktopBr}>Affordable Pricing</span>
          </h2>
        </div>

        {/* Pricing Toggle Switch */}
        <div className={styles.pricingSwitchWrapper}>
          <div className={styles.pricingSwitch}>
            <span className={classNames({ [styles.active]: isMonthly })}>Monthly</span>
            <div className={styles.toggleBtn} onClick={() => setIsMonthly(!isMonthly)}>
              <input type="checkbox" className={styles.checkbox} checked={!isMonthly} readOnly />
              <div className={styles.knob}></div>
            </div>
            <span className={classNames({ [styles.active]: !isMonthly })}>Yearly</span>
          </div>
          <p className={styles.saveBadge}>Save 20% on Annual Plan</p>
        </div>

        {/* Pricing Boxes Grid */}
        <div className={styles.pricingBoxesGrid}>
          {pricingPlans.map((plan, index) => (
            <SinglePricingBox key={index} plan={plan} isMonthly={isMonthly} />
          ))}
        </div>
      </div>
    </section>
  );
};
