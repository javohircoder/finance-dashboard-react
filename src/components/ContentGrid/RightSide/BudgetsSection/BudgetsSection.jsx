import DonutChart from './DonutChart/DonutChart.jsx';
import SvgArrowRight from '../../../UI/icons/SvgArrowRight.jsx';
import BudgetsList from './BudgetsList/BudgetsList.jsx';
import styles from './BudgetsSection.module.scss';

function BudgetsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Budgets</h3>
        <a className={styles.link} href="#">
          See Details
          <span className={styles.icon}>
            <SvgArrowRight />
          </span>
        </a>
      </div>

      <div className={styles.budgets}>
        <DonutChart />
        <BudgetsList />
      </div>
    </section>
  );
}

export default BudgetsSection;
