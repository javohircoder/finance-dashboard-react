import DonutChart from './DonutChart/DonutChart';
import SvgArrowRight from "../UI/icons/SvgArrowRight";
import BudgetsList from "./BudgetsList/BudgetsList.jsx";
import styles from "./BudgetsSection.module.scss";

function BudgetsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Budgets</h3>
                <a className={styles.link} href="#">
                    See Details

                    <span className={styles.icon}>
                        <SvgArrowRight/>
                    </span>
                </a>
            </div>

            <div className={styles.content}>
                <div className={styles.budgets}>
                    <DonutChart/>
                    <BudgetsList/>
                </div>
            </div>
        </section>
    );
}

export default BudgetsSection;
