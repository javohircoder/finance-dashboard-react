import styles from './NavItem.module.scss';

function NavItem({label, icon, isActive, onClick}) {
    return (
        <a
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{label}</span>
        </a>
    );
}

export default NavItem;
