import { useEffect, useRef } from 'react';
import classNames from 'classnames'; // Залишаємо на випадок, якщо він потрібен
import { tns } from 'tiny-slider/src/tiny-slider'; // !!! ВАЖЛИВО: Переконайтеся, що tiny-slider встановлений: npm install tiny-slider
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
  // Для справжньої нескінченної прокрутки часто потрібно більше елементів,
  // але Tiny-Slider створює клони автоматично, якщо налаштовано 'loop: true'.
];

export const Brands = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Перевіряємо, чи існує елемент та функція tns
    if (sliderRef.current && typeof tns !== 'undefined') {
      const slider = tns({
        container: sliderRef.current,
        items: 1, // Базова кількість елементів для мобільного
        slideBy: 'page',
        autoplay: true, // Автопрокрутка
        autoplayButtonOutput: false, // Приховуємо кнопку "Play/Pause"
        mouseDrag: true,
        controls: false,
        nav: false,
        loop: true,
        speed: 1000,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 2,
          },
          576: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
        },
      });

      return () => {
        if (slider) {
          slider.destroy();
        }
      };
    }
  }, []);

  return (
    <section className={classNames(styles.brandsSection, 'p-0')}>
      <div className="container">
        <div ref={sliderRef} className={classNames(styles.brandsGrid, 'my-slider')}>
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
