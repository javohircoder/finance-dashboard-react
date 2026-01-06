import styles from './TransactionItem.module.scss';

function TransactionItem({name, amount, date, avatar, type}) {
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <img
                    className={styles.avatar}
                    src={avatar}
                    alt={name}
                />
                <span className={styles.name}>{name}</span>
            </div>

            <div className={styles.details}>
                <span className={`${styles.amount} ${styles[type]}`}>{amount}</span>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    );
}

export default TransactionItem;
