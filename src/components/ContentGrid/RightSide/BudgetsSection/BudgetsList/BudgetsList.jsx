import BudgetItem from '../BudgetItem/BudgetItem.jsx';
import styles from './BudgetsList.module.scss';

const budgets = [
  { id: 1, name: 'Entertainment', amount: '$50.00', color: 'green' },
  { id: 2, name: 'Bills', amount: '$750.00', color: 'blue' },
  { id: 3, name: 'Dining Out', amount: '$75.00', color: 'orange' },
  { id: 4, name: 'Personal', amount: '$75.00', color: 'gray' },
];

function BudgetsList() {
  return (
    <div className={styles.list}>
      {budgets.map((budget) => (
        <BudgetItem key={budget.id} {...budget} />
      ))}
    </div>
  );
}

export default BudgetsList;
