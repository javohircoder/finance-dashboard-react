import TransactionRow from '../TransactionRow/TransactionRow.jsx';
import styles from './TransactionsTable.module.scss';

function TransactionsTable({ data }) {
  if (data.length === 0) {
    return <div className={styles.transactionsLoad}>No transactions data</div>;
  }
  return (
    <div className={styles.transactionTable}>
      <div className={styles.tableHeader}>
        <div className={styles.tableCell}>Pokemon</div>
        <div className={styles.tableCell}>Category</div>
        <div className={styles.tableCell}>Height</div>
        <div className={styles.tableCell}>Weight</div>
        <div className={styles.tableCell}>Speed</div>
        {/*<div className={`${styles.tableCell} ${styles.amount}`}>Amount</div>*/}
      </div>
      <div className={styles.tableBody}>
        {data.map((item) => (
          <TransactionRow key={item.id} transaction={item} />
        ))}
      </div>
    </div>
  );
}

export default TransactionsTable;
