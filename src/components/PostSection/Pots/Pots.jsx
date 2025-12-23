import PotsList from '../PotsList/PotsList';
import PotsSummary from '../PotsSummary/PotsSummary';

function Pots() {
  return (
    <div className="pots">
      <div className="pots__summary">
        <PotsSummary />
      </div>
      <div className="pots__list">
        <PotsList />
      </div>
    </div>
  );
}

export default Pots;
