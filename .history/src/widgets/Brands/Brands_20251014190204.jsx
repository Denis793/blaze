import brand1 from '@/assets/images/brands/';

import styles from './Brands.module.scss';

const brandsList = ['graygrids.svg', 'lineicons.svg', 'uideck.svg', 'pagebulb.svg'];

export const Brands = () => {
  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <div className={styles.brandsGrid}>
          {brandsList.map((brand, index) => (
            <div key={index} className={styles.singleBrands}>
              <img src={`assets/images/brands/${brand}`} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
