import styles from './PotsSummary.module.scss';
import SvgPotsIconRegular from '../../../../UI/icons/SvgPotsIconRegular.jsx';

function PotsSummary() {
  return (
    <div className={styles.summary}>
      <div className={styles.icon}>
        <SvgPotsIconRegular />
      </div>

      <div className={styles.total}>
        <span className={styles.label}>Total Saved</span>
        <span className={styles.amount}>$850</span>
      </div>
    </div>
  );
}

export default PotsSummary;
