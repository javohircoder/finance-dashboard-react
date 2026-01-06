import BillItem from '../BillItem/BillItem';
import styles from './BillsList.module.scss';

const bills = [
    {id: 1, label: 'Paid Bills', amount: '$190.00', type: 'paid'},
    {id: 2, label: 'Total Upcoming', amount: '$194.98', type: 'total'},
    {id: 3, label: 'Due Soon', amount: '$59.98', type: 'due'},
]

function BillsList() {
    return (
        <div className={styles.list}>
            {bills.map((bill) => (
                <BillItem key={bill.id} label={bill.label} amount={bill.amount} type={bill.type}/>
            ))}
        </div>
    );
}

export default BillsList;
