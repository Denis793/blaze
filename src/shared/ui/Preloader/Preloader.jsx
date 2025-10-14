import classNames from 'classnames';
import styles from './Preloader.module.scss';

export const Preloader = ({ isLoading }) => {
  const preloaderClasses = classNames(styles.preloader, {
    [styles.hide]: !isLoading,
  });

  return (
    <div id="preloader" className={preloaderClasses}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
