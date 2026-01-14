import styles from './BudgetItem.module.scss';

function BudgetItem({ name, amount, color }) {
  return (
    <div className={styles.item}>
      <span className={styles.dot} data-color={color} />
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <span className={styles.amount}>{amount}</span>
      </div>
    </div>
  );
}

export default BudgetItem;
