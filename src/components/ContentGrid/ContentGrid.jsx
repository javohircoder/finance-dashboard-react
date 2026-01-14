import styles from './ContentGrid.module.scss';
import PostSection from './LeftSide/PostSection/PostSection.jsx';
import TransactionsSection from './LeftSide/TransactionsSection/TransactionsSection.jsx';
import BudgetsSection from './RightSide/BudgetsSection/BudgetsSection.jsx';
import BillsSection from './RightSide/BillsSection/BillsSection.jsx';

function ContentGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.left}>
        <PostSection />
        <TransactionsSection />
      </div>
      <div className={styles.right}>
        <BudgetsSection />
        <BillsSection />
      </div>
    </div>
  );
}

export default ContentGrid;
