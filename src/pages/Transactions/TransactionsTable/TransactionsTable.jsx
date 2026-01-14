import TransactionRow from '../TransactionRow/TransactionRow.jsx';
import styles from './TransactionsTable.module.scss';

function TransactionsTable({ data }) {
  if (data.length === 0) {
    return <p>No transactions found</p>;
  }
  return (
    <div className={styles.transactionTable}>
      <div className={styles.tableHeader}>
        <div className={styles.tableCell}></div>
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
