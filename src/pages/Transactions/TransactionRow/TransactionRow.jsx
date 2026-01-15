import styles from './TransactionRow.module.scss';

function TransactionRow({ transaction }) {
  const { avatar, title, category, date, amount, type } = transaction;
  const isPositive = type === 'positive';
  const formatAmount = () => {
    const abs = Math.abs(amount).toFixed(2);
    return `${isPositive ? '+' : '-'} ${abs}`;
  };
  return (
    <div className={styles.row}>
      <div className={styles.transactionCell}>
        <div className={styles.recipient}>
          <img src={avatar} alt={title} className={styles.avatar} />
          <span className={styles.title}>{title}</span>
        </div>
      </div>
      <div className={styles.transactionCell}>
        <span className={styles.badge}>{category}</span>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={`${styles.amount} ${styles[type]}`}>
        {formatAmount(amount)}
      </div>
    </div>
  );
}

export default TransactionRow;
