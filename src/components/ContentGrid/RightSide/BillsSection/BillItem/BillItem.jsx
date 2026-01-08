import styles from './BillItem.module.scss';

function BillItem({label, amount, state}) {
    return (
        <div className={styles.item} data-state={state}>
            <span className={styles.label}>{label}</span>
            <span className={styles.amount}>{amount}</span>
        </div>
    );
}

export default BillItem;
