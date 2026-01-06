import styles from './Card.module.scss';

function Card({label, amount, variant = 'light'}) {
    return (
        <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
            <span className={styles.label}>{label}</span>
            <span className={styles.amount}>{amount}</span>
        </div>
    );
}

export default Card;
