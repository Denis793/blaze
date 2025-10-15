import clsx from 'clsx';
import styles from './Services.module.scss';
import { servicesBoxes } from '@/data/featureData';

export const Services = () => {
  return (
    <section id="services" className={styles.serviceWrapper}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Modern design with Essential <br />
          Services
        </h2>

        <div className={styles.serviceBoxes}>
          {servicesBoxes.map((service, index) => (
            <div key={index} className={styles.services}>
              <div className={clsx(styles.serviceIcon, styles[service.color])}>
                <i className={`lni ${service.iconClass}`}></i>
              </div>

              <div className={styles.serviceContent}>
                <h4>{service.title}</h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
