import styles from './TransactionRow.module.scss';

function TransactionRow({ transaction }) {
  const {
    avatar,
    name,
    category,
    date,
    amount,
    type,
    avatarFallback,
    height,
    weight,
    speed,
    avatarSvg,
  } = transaction;
  const isPositive = type === 'positive';

  const formatAmount = () => {
    const abs = Math.abs(amount).toFixed(2);
    return `${isPositive ? '+' : '-'} ${abs}`;
  };

  const handleImgError = (e) => {
    // if Gif 404
    if (avatarFallback) {
      e.currentTarget.src = avatarFallback;
      e.currentTarget.onerror = null;
    }
  };

  return (
    <div className={styles.row}>
      <div className={styles.transactionCell}>
        <div className={styles.recipient}>
          <img src={avatarSvg} alt={name} className={styles.avatarSvg} />
          <img src={avatar} alt={name} className={styles.avatar} />
          <span className={styles.title}>{name}</span>
        </div>
      </div>
      <div className={styles.transactionCell}>
        <span className={styles.badge}>{category}</span>
      </div>
      <div className={styles.transactionCell}>
        <span>{height ?? 0} m</span>
      </div>
      <div className={styles.transactionCell}>
        <span>{weight ?? 0} kg</span>
      </div>

      <div className={styles.transactionCell}>
        <span>{speed ?? 0}</span>
      </div>
    </div>
  );
}

export default TransactionRow;
