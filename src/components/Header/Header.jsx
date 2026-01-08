import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Overview</h2>
        </header>
    )
}

export default Header;