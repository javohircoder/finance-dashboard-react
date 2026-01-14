import styles from './PageHeader.module.scss';

function PageHeader({ title }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
}

export default PageHeader;
