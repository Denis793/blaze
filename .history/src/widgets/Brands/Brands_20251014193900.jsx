import { useEffect, useRef } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';

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
  { src: BrandGrays, alt: 'GrayGrids Logo' },
  { src: BrandLine, alt: 'LineIcons Logo' },
];

export const Brands = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Ініціалізація Tiny-Slider
    if (sliderRef.current && typeof tns !== 'undefined') {
      const slider = tns({
        container: sliderRef.current,
        items: 1,
        slideBy: 'page',
        autoplay: true, // Автопрокрутка
        autoplayButtonOutput: false,
        mouseDrag: true,
        controls: false, // Приховуємо стрілки
        nav: false, // Приховуємо пагінацію
        loop: true, // Увімкнення нескінченного циклу
        speed: 1500, // Швидкість анімації
        autoplayTimeout: 3000, // Затримка між прокрутками
        responsive: {
          // Налаштування для різних розмірів екрану
          0: { items: 2 },
          576: { items: 3 },
          768: { items: 4 },
          992: { items: 5 }, // 5 логотипів на широкому екрані
        },
      });

      // Очищення: видаляємо слайдер при демонтажі компонента
      return () => {
        if (slider) {
          slider.destroy();
        }
      };
    }
  }, []);

  return (
    <section className={styles.brandsSection}>
      <div className="container">
        {/* Додаємо ref для ініціалізації слайдера */}
        <div ref={sliderRef} className={styles.brandsGrid}>
          {brandsList.map((brand, index) => (
            <div key={index} className={styles.singleBrands}>
              <img src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
