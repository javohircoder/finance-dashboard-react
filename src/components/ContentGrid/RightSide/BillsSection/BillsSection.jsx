import BillsList from './BillsList/BillsList.jsx';
import styles from './BillsSection.module.scss';
import SvgArrowRight from '../../../UI/icons/SvgArrowRight.jsx';

function BillsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recurring Bills</h3>
        <a href="#" className={styles.link}>
          See Details
          <span className={styles.icon}>
            <SvgArrowRight />
          </span>
        </a>
      </div>

      <BillsList />
    </section>
  );
}

export default BillsSection;
