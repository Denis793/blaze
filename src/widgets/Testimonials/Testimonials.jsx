import React from 'react';
import { testimonials } from '@/shared/data/testimonialsData';
import styles from './Testimonials.module.scss';

export const Testimonials = () => {
  const items = testimonials;

  return (
    <section className={styles.testimonials} id="testimonial">
      <div className="container">
        <div className={styles.header}>
          <h2>Client’s Testimonials</h2>
          <p className="description">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using.
          </p>
        </div>

        <div className={styles.cardsWrapper}>
          {items.map((t) => (
            <article key={t.id} className={styles.testimonialCard}>
              <img className={styles.imageCard} src={t.image} alt={t.name} />

              <div className={styles.content}>
                <h4>{t.name}</h4>

                <div className={styles.stars} aria-hidden="true">
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                </div>

                <p className="description">{t.text}</p>
                <span className={styles.role}>{t.role}</span>
                <div className={styles.company}>{t.company}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
