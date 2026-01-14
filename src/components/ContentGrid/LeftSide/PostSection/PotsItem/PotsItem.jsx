import styles from './PotsItem.module.scss';

function PotsItem({ name, amount, state }) {
  return (
    <div className={styles.item} data-state={state}>
      <span className={styles.name}>{name}</span>
      <span className={styles.amount}>{amount}</span>
    </div>
  );
}

export default PotsItem;
