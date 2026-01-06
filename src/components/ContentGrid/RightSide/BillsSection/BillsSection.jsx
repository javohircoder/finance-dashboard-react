import BillsList from './BillsList/BillsList.jsx';
import styles from './BillsSection.module.scss';
import SvgArrowRight from "../../../UI/icons/SvgArrowRight.jsx";

function BillsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Recurring Bills</h3>
                <a className={styles.link} href="#">
                    See Details
                    <span className={styles.icon}>
                        <SvgArrowRight/>
                    </span>
                </a>
            </div>
            <div className={styles.content}>
                <BillsList/>
            </div>
        </section>
    );
}

export default BillsSection;
