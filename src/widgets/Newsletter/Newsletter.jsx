import styles from './Newsletter.module.scss';
import { Button } from '@/shared/ui/Button';

export const Newsletter = () => {
  const news = [
    { id: 1, title: 'Blaze v2.0 Released', href: '#0', date: 'Oct 10, 2025' },
    { id: 2, title: 'How to optimize performance in React', href: '#0', date: 'Sep 28, 2025' },
    { id: 3, title: 'Design tokens: a practical guide', href: '#0', date: 'Aug 15, 2025' },
  ];

  return (
    <section id="news" className={styles.newsletterSection}>
      <div className="container">
        <div className={styles.newsletterInner}>
          <div className={styles.contentWrapper}>
            <h2>
              Latest <span className={styles.desktopBr}>News & Articles</span>
            </h2>
            <p>Stay informed with the latest updates, tutorials and product news from the Blaze team.</p>
          </div>

          <aside className={styles.newsBlock} aria-label="Latest news">
            <ul className={styles.newsList}>
              {news.map((n) => (
                <li key={n.id} className={styles.newsItem}>
                  <a href={n.href} className={styles.newsLink}>
                    <span className={styles.newsTitle}>{n.title}</span>
                    <span className={styles.newsMeta}>{n.date}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.newsFooter}>
              <Button variant="primary" className={styles.cta} href="#0">
                See all news
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
