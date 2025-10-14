import BrandGrays from '@/assets/images/brands/graygrids.svg';
import BrandLine from '@/assets/images/brands/lineicons.svg';
import BrandUiDeck from '@/assets/images/brands/uideck.svg';
import BrandPageBulb from '@/assets/images/brands/pagebulb.svg';
import styles from './Brands.module.scss';

const brandsList = [
  { src: BrandGrays, alt: 'GrayGrids Logo' },
  { src: BrandLine, alt: 'LineIcons Logo' },
  { src: BrandUiDeck, alt: 'UiDeck Logo' },
  { src: BrandPageBulb, alt: 'PageBulb Logo' },
];

export const Brands = () => {
  const animatedBrandsList = [...brandsList, ...brandsList];

  return (
    <section className={styles.brandsSection}>
      <div className="container">
        <div className={styles.sliderTrackWrapper}>
          <div className={styles.sliderTrack}>
            {animatedBrandsList.map((brand, index) => (
              <div key={index} className={styles.singleBrands}>
                <img src={brand.src} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
