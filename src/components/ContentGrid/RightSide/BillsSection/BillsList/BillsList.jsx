import BillItem from '../BillItem/BillItem.jsx';
import styles from './BillsList.module.scss';

const bills = [
    {id: 1, label: 'Paid Bills', amount: '$190.00', state: 'paid'},
    {id: 2, label: 'Total Upcoming', amount: '$194.98', state: 'total'},
    {id: 3, label: 'Due Soon', amount: '$59.98', state: 'due'},
]

function BillsList() {
    return (
        <div className={styles.list}>
            {bills.map((bill) => (
                <BillItem key={bill.id} {...bill} />
            ))}
        </div>
    );
}

export default BillsList;
