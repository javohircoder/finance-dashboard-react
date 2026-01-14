import PotsSummary from '../PotsSummary/PotsSummary.jsx';
import PotsList from '../PotsList/PotsList.jsx';
import styles from './Pots.module.scss';

function Pots() {
  return (
    <div className={styles.pots}>
      <PotsSummary />
      <PotsList />
    </div>
  );
}

export default Pots;
