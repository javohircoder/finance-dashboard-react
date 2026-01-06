import styles from './BillItem.module.scss';

function BillItem({label, amount, type}) {
    return (
        <div className={`${styles.item} ${type}`}>
            <span className={styles.label}>{label}</span>
            <span className={styles.amount}>{amount}</span>
        </div>
    );
}

export default BillItem;
