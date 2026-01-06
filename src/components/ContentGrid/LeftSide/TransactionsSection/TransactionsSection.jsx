import TransactionsList from './TransactionsList/TransactionsList.jsx';
import styles from './TransactionsSection.module.scss'
import SvgArrowRight from "../../../UI/icons/SvgArrowRight.jsx";

function TransactionsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Transactions</h3>

                <a href="#" className={styles.link}>View All
                    <span className={styles.icon}>
                        <SvgArrowRight/>
                    </span>
                </a>
            </div>
            <div className={styles.content}>
                <div className={styles.transactions}>
                    <TransactionsList/>
                </div>
            </div>
        </section>
    );
}

export default TransactionsSection;
